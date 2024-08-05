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

export interface OptionsAut {
  name: string
  value: string
}
