import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '@/supabaseClient'


export function LoginScreen() {
    return (
        <div className="w-full max-w-md bg-white p-2">
            <Auth
                supabaseClient={supabase}
                appearance={{
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: '#000000',
                                brandAccent: '#333333',
                            },
                        },
                    },
                }}
                providers={[]} // Apenas e-mail e senha
                localization={{
                    variables: {
                        sign_in: {
                            email_label: 'Endereço de e-mail',
                            password_label: 'Senha',
                            button_label: 'Entrar',
                            loading_button_label: 'Entrando...',
                            email_input_placeholder: 'Seu e-mail',
                            password_input_placeholder: 'Sua senha',
                        },
                        sign_up: {
                            email_label: 'Endereço de e-mail',
                            password_label: 'Crie uma senha',
                            button_label: 'Cadastrar',
                            loading_button_label: 'Cadastrando...',
                            email_input_placeholder: 'Seu e-mail',
                            password_input_placeholder: 'Sua senha',
                        },
                    },
                }}
            />
        </div>
    )
}