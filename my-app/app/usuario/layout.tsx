import Moldura from "../componentes/MolduraUsuario";
import "../globals.css";

export default function UsuarioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Moldura>
      {children}
    </Moldura>
  );
}