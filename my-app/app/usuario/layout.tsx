import Moldura from "../componentes/MolduraUsuario";
import "../globals.css"; // Se os estilos globais já são importados no layout raiz, você pode até apagar essa linha!

export default function UsuarioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Removemos <html>, <body> e as fontes. 
    // Deixamos apenas a Moldura envolvendo o conteúdo da página de usuário.
    <Moldura>
      {children}
    </Moldura>
  );
}