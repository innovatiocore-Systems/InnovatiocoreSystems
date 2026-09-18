import { NextRequest, NextResponse } from 'next/server'
import { createSubmission } from '../../../../lib/submissions'

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)

  if (
    !body ||
    typeof body.fullName !== 'string' || !body.fullName.trim() ||
    typeof body.company !== 'string' || !body.company.trim() ||
    typeof body.email !== 'string' || !body.email.trim() ||
    typeof body.product !== 'string' || !body.product.trim() ||
    typeof body.message !== 'string' || !body.message.trim()
  ) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const submission = await createSubmission({
    fullName: body.fullName.trim(),
    company: body.company.trim(),
    email: body.email.trim(),
    phone: typeof body.phone === 'string' ? body.phone.trim() : '',
    product: body.product.trim(),
    message: body.message.trim(),
  })

  if (!submission) {
    return NextResponse.json({ error: 'Failed to create submission' }, { status: 500 })
  }

  return NextResponse.json({ submission }, { status: 201 })
}
