import React from "react";

type PromoProps = {
  title: string;
};

const Promo: React.FC<PromoProps> = (props) => {
  return <div className="container mx-auto p-8 rounded-2xl border overflow-hidden bg-slate-50 text-black">{props.title}</div>;
};

export { Promo };
