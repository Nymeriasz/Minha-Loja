'use client'
import { Input, Button, Card, CardBody, CardHeader } from '@nextui-org/react'
import { useState } from 'react'
import { Mail, Lock } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function handleLogin() {
    if (!email || !senha) {
      alert('Preencha todos os campos.')
      return
    }
    alert(`Login simulado para ${email}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md rounded-2xl shadow-lg border border-gray-200">
        <CardHeader className="flex flex-col gap-1 text-center pb-0 pt-6">
          <h1 className="text-3xl font-bold text-gray-900">Bem-vindo de volta</h1>
          <p className="text-sm text-gray-500">Faça login para continuar</p>
        </CardHeader>
        <CardBody className="p-8 space-y-6">
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onValueChange={setEmail}
              variant="bordered"
              placeholder="seuemail@exemplo.com"
              classNames={{ inputWrapper: 'bg-white' }}
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="senha" className="text-sm font-medium text-gray-700">
              Senha
            </label>
            <Input
              id="senha"
              type="password"
              value={senha}
              onValueChange={setSenha}
              variant="bordered"
              placeholder="Digite sua senha"
              classNames={{ inputWrapper: 'bg-white' }}
            />
          </div>

          <Button
            onPress={handleLogin}
            className="w-full mt-4 font-semibold text-white bg-red-600 hover:bg-red-700 transition rounded-xl py-2 text-base"
          >
            Entrar
          </Button>

          <div className="text-center text-sm text-gray-500 mt-2 space-y-1">
            <p>
              Esqueceu a senha?{' '}
              <a href="#" className="text-red-600 hover:underline font-medium">
                Recuperar
              </a>
            </p>
            <p>
              Não tem conta?{' '}
              <a href="#" className="text-red-600 hover:underline font-medium">
                Cadastrar
              </a>
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
