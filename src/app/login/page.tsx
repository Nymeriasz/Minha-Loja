'use client'
import { Input, Button } from '@nextui-org/react'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function handleLogin() {
    alert(`Login simulado para ${email}`)
  }

  return (
    <div className="max-w-sm mx-auto mt-10">
      <Input label="Email" type="email" value={email} onValueChange={setEmail} isRequired />
      <Input label="Senha" type="password" value={senha} onValueChange={setSenha} isRequired className="mt-4" />
      <Button color="primary" onPress={handleLogin} className="mt-6 w-full">Entrar</Button>
    </div>
  )
}