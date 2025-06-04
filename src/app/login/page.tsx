'use client'
import { Input, Button, Card, CardBody } from '@nextui-org/react'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function handleLogin() {
    alert(`Login simulado para ${email}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-xl rounded-xl">
        <CardBody className="p-8">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Acesse sua conta</h1>

          <div className="space-y-4">
            <h1>Email:</h1>
            <Input
              type="email"
              value={email}
              onValueChange={setEmail}
              isRequired
              variant="bordered"
              placeholder="seuemail@exemplo.com"
            />
            <h1>Senha:</h1>
            <Input
              type="password"
              value={senha}
              onValueChange={setSenha}
              isRequired
              variant="bordered"
              placeholder="Digite sua senha"
            />

            <Button
              color="primary"
              onPress={handleLogin}
              className="w-full mt- font-semibold text-white bg-red-600 hover:bg-red-700 transition rounded-xl"
            >
              Entrar
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
