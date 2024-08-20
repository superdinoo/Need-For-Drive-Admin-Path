export interface InputProps {
  value: string
  onChange: (value: string) => void
  name: string
  placeholder?: string
  onReset?: () => void
  labels: string
  list?: string
  type?: 'text' | 'password'
  onClick?: () => void
  eyeOpen?: boolean
}

export interface InputAutRegister {
  eMail: string
  password: string
}

export interface Token {
  access_Token: string
}

export interface ApiSwaggerState {
  token: Token[]
  isLoading: boolean
  error: string | null
}
