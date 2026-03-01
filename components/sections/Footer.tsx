export const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-400 py-16 relative overflow-hidden">
            {/* Subtle gradient */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/[0.03] rounded-full blur-[100px]" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid md:grid-cols-3 gap-12 mb-12">

                    {/* Brand */}
                    <div>
                        <h3 className="text-white text-xl font-extrabold mb-4 font-display tracking-tight">TIAGO COELHO</h3>
                        <p className="mb-2 font-medium text-gray-300">Personal Trainer Presencial</p>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            CREF 155340-G/SP<br />
                            São José do Rio Preto/SP<br />
                            Atendimento Presencial em Rio Preto e Região
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-4 text-sm tracking-wider">CONTATO</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="mailto:tiago.coelho11@hotmail.com" className="hover:text-blue-400 transition-colors">
                                    Email: tiago.coelho11@hotmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/5517992755039?text=Ol%C3%A1%20Tiago,%20vim%20pelo%20site!"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-green-400 transition-colors"
                                >
                                    WhatsApp: (17) 99275-5039
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com/otiagocoelho"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-400 transition-colors"
                                >
                                    Instagram: @otiagocoelho
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold mb-4 text-sm tracking-wider">LINKS</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Política de Privacidade</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Termos de Uso</a></li>
                            <li><a href="#faq" className="hover:text-blue-400 transition-colors">Perguntas Frequentes</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800/50 pt-8 text-center text-xs text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Tiago Coelho - Personal Trainer. Todos os direitos reservados.</p>
                    <p className="mt-2 text-gray-500">
                        Desenvolvido por <a href="https://guilds.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Guilds</a>
                        {" · "}
                        <a
                            href="https://wa.me/5517997520867?text=Vi%20que%20desenvolveu%20o%20site%20do%20Personal%20Tiago%20Coelho%20e%20gostaria%20de%20desenvolver%20o%20meu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors"
                        >
                            Quero um site assim
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};
