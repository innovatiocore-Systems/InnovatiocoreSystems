import { getSupabase } from './supabase'

export interface DemoSubmission {
  id: string
  fullName: string
  company: string
  email: string
  phone: string
  product: string
  message: string
  status: 'new' | 'contacted' | 'archived'
  submittedAt: string
}

type SubmissionStatus = DemoSubmission['status']

interface SubmissionRow {
  id: string
  full_name: string
  company: string
  email: string
  phone: string | null
  product: string
  message: string
  status: SubmissionStatus
  submitted_at: string
}

const TABLE = 'submissions'

function fromRow(row: SubmissionRow): DemoSubmission {
  return {
    id: row.id,
    fullName: row.full_name,
    company: row.company,
    email: row.email,
    phone: row.phone ?? '',
    product: row.product,
    message: row.message,
    status: row.status,
    submittedAt: row.submitted_at,
  }
}

export async function getAllSubmissions(): Promise<DemoSubmission[]> {
  const { data, error } = await getSupabase()
    .from(TABLE)
    .select('*')
    .order('submitted_at', { ascending: false })

  if (error) {
    console.error('Error fetching submissions:', error.message)
    return []
  }
  return (data as SubmissionRow[]).map(fromRow)
}

export async function createSubmission(
  input: Omit<DemoSubmission, 'id' | 'status' | 'submittedAt'>
): Promise<DemoSubmission | null> {
  const { data, error } = await getSupabase()
    .from(TABLE)
    .insert({
      full_name: input.fullName,
      company: input.company,
      email: input.email,
      phone: input.phone,
      product: input.product,
      message: input.message,
    })
    .select()
    .single()

  if (error) {
    console.error('Error creating submission:', error.message)
    return null
  }
  return fromRow(data as SubmissionRow)
}

export async function updateSubmissionStatus(
  id: string,
  status: SubmissionStatus
): Promise<DemoSubmission | null> {
  const { data, error } = await getSupabase()
    .from(TABLE)
    .update({ status })
    .eq('id', id)
    .select()
    .maybeSingle()

  if (error) {
    console.error('Error updating submission:', error.message)
    return null
  }
  return data ? fromRow(data as SubmissionRow) : null
}

export async function deleteSubmission(id: string): Promise<boolean> {
  const { data, error } = await getSupabase().from(TABLE).delete().eq('id', id).select('id')

  if (error) {
    console.error('Error deleting submission:', error.message)
    return false
  }
  return (data?.length ?? 0) > 0
}
