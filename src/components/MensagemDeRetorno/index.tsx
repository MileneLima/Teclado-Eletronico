import React from "react";

type Props = {
  tipo: "success" | "error" | "";
  mensagem: string;
};

const MensagemDeRetorno: React.FC<Props> = ({ tipo, mensagem }) => {
  if (!mensagem) return null;

  return (
    <p
      style={{
        color:
          tipo === "success" ? "green" : tipo === "error" ? "red" : "black",
      }}
    >
      {mensagem}
    </p>
  );
};

export default MensagemDeRetorno;