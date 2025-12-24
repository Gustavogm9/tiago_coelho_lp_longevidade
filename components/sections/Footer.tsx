export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
            <div className="container px-4 mx-auto">
                <div className="grid md:grid-cols-3 gap-12 mb-12">

                    {/* Brand */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-4 font-display">TIAGO COELHO</h3>
                        <p className="mb-2">Método Defini12</p>
                        <p className="text-sm">
                            Personal Trainer CREF 155340-G/SP<br />
                            São José do Rio Preto/SP<br />
                            Atendimento Online para todo Brasil
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-4">CONTATO</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="mailto:tiago.coelho11@hotmail.com" className="hover:text-primary transition-colors">
                                    Email: tiago.coelho11@hotmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/5517992755039?text=Ol%C3%A1%20Tiago,%20vim%20pelo%20site!"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-colors"
                                >
                                    WhatsApp: (17) 99275-5039
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com/otiagocoelho"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-colors"
                                >
                                    Instagram: @otiagocoelho
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-bold mb-4">LINKS ÚTEIS</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Perguntas Frequentes</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Tiago Coelho - Método Defini12. Todos os direitos reservados.</p>
                    <p className="mt-2 text-gray-600">Desenvolvido por Guilds Lab</p>
                </div>
            </div>
        </footer>
    );
};
