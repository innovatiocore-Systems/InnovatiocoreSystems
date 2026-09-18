import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '../../../../../lib/requireAdmin'
import { deleteSubmission, updateSubmissionStatus } from '../../../../../lib/submissions'

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const body = await request.json().catch(() => null)
  const status = body?.status

  if (!['new', 'contacted', 'archived'].includes(status)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }

  const submission = await updateSubmissionStatus(id, status)
  if (!submission) return NextResponse.json({ error: 'Submission not found' }, { status: 404 })
  return NextResponse.json({ submission })
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const ok = await deleteSubmission(id)
  if (!ok) return NextResponse.json({ error: 'Submission not found' }, { status: 404 })
  return NextResponse.json({ ok: true })
}
