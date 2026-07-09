import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/supabaseClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { User, LogOut, Shield, Calendar, Mail } from "lucide-react";

const ProfilePage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        // Buscar sessão atual
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!session) {
                // Se não houver sessão ativa, redireciona para a home
                navigate("/");
            } else {
                setUser(session.user);
            }
            setLoading(false);
        });

        // Escutar mudanças no estado do login
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === "SIGNED_OUT" || !session) {
                navigate("/");
            } else {
                setUser(session.user);
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await supabase.auth.signOut();
            navigate("/");
        } catch (error) {
            console.error("Erro ao fazer logout:", error);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex flex-col justify-between">
                <Header />
                <main className="flex-1 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-luxury-gold"></div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background flex flex-col justify-between">
            <Header />
            <main className="flex-1 py-32 container mx-auto px-4">
                <div className="max-w-3xl mx-auto bg-card rounded-2xl border border-border p-8 shadow-xl">
                    {/* Cabeçalho do Perfil */}
                    <div className="flex flex-col md:flex-row items-center gap-6 pb-8 border-b border-border">
                        <div className="w-24 h-24 rounded-full bg-luxury-gold/10 flex items-center justify-center border-2 border-luxury-gold">
                            <User className="w-12 h-12 text-luxury-gold" />
                        </div>
                        <div className="text-center md:text-left flex-1">
                            <h1 className="text-3xl font-heading font-bold text-foreground">
                                Minha Conta
                            </h1>
                            <p className="text-muted-foreground mt-1">
                                Gerencie seus dados e preferências de viagem
                            </p>
                        </div>
                        <Button
                            onClick={handleLogout}
                            variant="destructive"
                            className="flex items-center gap-2"
                        >
                            <LogOut className="w-4 h-4" />
                            Sair
                        </Button>
                    </div>

                    {/* Detalhes do Usuário */}
                    <div className="mt-8 space-y-6">
                        <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                            <Shield className="w-5 h-5 text-luxury-gold" /> Informações Pessoais
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* E-mail */}
                            <div className="bg-muted/40 p-4 rounded-xl border border-border flex items-start gap-4">
                                <Mail className="w-6 h-6 text-muted-foreground mt-1" />
                                <div>
                                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                                        E-mail
                                    </label>
                                    <span className="text-foreground font-medium text-sm md:text-base break-all">
                                        {user?.email}
                                    </span>
                                </div>
                            </div>

                            {/* Data de Cadastro */}
                            <div className="bg-muted/40 p-4 rounded-xl border border-border flex items-start gap-4">
                                <Calendar className="w-6 h-6 text-muted-foreground mt-1" />
                                <div>
                                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
                                        Membro desde
                                    </label>
                                    <span className="text-foreground font-medium text-sm md:text-base">
                                        {user?.created_at
                                            ? new Date(user.created_at).toLocaleDateString("pt-BR", {
                                                day: "2-digit",
                                                month: "long",
                                                year: "numeric",
                                            })
                                            : "N/A"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProfilePage;
