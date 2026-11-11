type Props = { jogo: string; titulo: string };

/**
 * Ilustrações vetoriais originais e leves para identificar os jogos.
 * Não dependem de imagens externas e mantêm o mesmo formato em todos os anos.
 */
export default function MiniaturaJogo({ jogo, titulo }: Props) {
  const paletas: Record<string, [string, string, string]> = {
    "numeros-ate-5": ["#EAF1FA", "#27568C", "#E58A20"],
    "bolo-mae-cila": ["#FDEAE6", "#A94134", "#F2B246"],
    "exploradores-outono": ["#E8F4EE", "#1D6A50", "#E58A20"],
    "cacadores-do-c": ["#FDEAE6", "#A94134", "#4175B5"],
    "numeros-amigos-decomposicao": ["#FFF2D9", "#875100", "#4175B5"],
    "gramatica-regresso": ["#EAF1FA", "#27568C", "#2E8B68"],
  };
  const [fundo, tinta, acento] = paletas[jogo] ?? ["#EAF1FA", "#27568C", "#E58A20"];
  const common = { stroke: tinta, strokeWidth: 3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };
  let desenho: React.ReactNode;
  switch (jogo) {
    case "numeros-ate-5":
      desenho = <><circle cx="42" cy="29" r="9" fill={acento}/><circle cx="62" cy="29" r="9" fill={acento}/><circle cx="82" cy="29" r="9" fill={acento}/><text x="61" y="75" textAnchor="middle" fontSize="34" fontWeight="900" fill={tinta}>1 2 3</text></>;
      break;
    case "bolo-mae-cila":
      desenho = <><path d="M29 66h67l-7-27H36z" fill={acento} opacity=".8"/><path d="M25 65h75M34 40q7-12 15 0t15 0t15 0t15 0" {...common}/><path d="M50 30v-9m23 9v-9" {...common}/><circle cx="51" cy="17" r="3" fill={acento}/><circle cx="74" cy="17" r="3" fill={acento}/></>;
      break;
    case "exploradores-outono":
      desenho = <><path d="M62 70V42" {...common}/><path d="M62 50c-25 1-32-19-20-28 12-9 22 1 20 13 1-20 20-25 29-13 10 14-8 29-29 28Z" fill={acento} opacity=".75"/><path d="M62 49V22M62 48 45 32M62 43 79 30" {...common}/><path d="M30 76h65" {...common}/></>;
      break;
    case "cacadores-do-c":
      desenho = <><circle cx="61" cy="45" r="27" fill="#FFFFFF" opacity=".75"/><text x="59" y="60" textAnchor="middle" fontSize="51" fontWeight="900" fill={tinta}>Ç</text><circle cx="93" cy="21" r="7" fill={acento}/><circle cx="27" cy="66" r="5" fill={acento}/></>;
      break;
    case "numeros-amigos-decomposicao":
      desenho = <><rect x="17" y="20" width="37" height="54" rx="10" fill="#FFFFFF"/><rect x="70" y="20" width="37" height="54" rx="10" fill="#FFFFFF"/><text x="35" y="57" textAnchor="middle" fontSize="30" fontWeight="900" fill={tinta}>7</text><text x="88" y="57" textAnchor="middle" fontSize="30" fontWeight="900" fill={tinta}>3</text><path d="M57 46h10" {...common}/><path d="M49 82h29" stroke={acento} strokeWidth="5" strokeLinecap="round"/></>;
      break;
    case "gramatica-regresso":
      desenho = <><path d="M25 25q17-8 37 3 20-11 37-3v49q-20-7-37 4-19-11-37-4Z" fill="#FFFFFF" stroke={tinta} strokeWidth="3" strokeLinejoin="round"/><path d="M62 28v50M35 41h17m-17 10h17m-17 10h13m25-20h16m-16 10h16m-16 10h12" {...common}/><circle cx="96" cy="19" r="8" fill={acento}/></>;
      break;
    default:
      desenho = <><circle cx="62" cy="46" r="24" fill={acento}/><path d="M50 46h24M62 34v24" {...common}/></>;
  }
  return (
    <svg className="miniatura-jogo" viewBox="0 0 124 94" role="img" aria-label={`Ilustração do jogo: ${titulo}`} xmlns="http://www.w3.org/2000/svg">
      <rect width="124" height="94" rx="12" fill={fundo}/>
      <circle cx="112" cy="85" r="28" fill={acento} opacity=".12"/>
      <circle cx="13" cy="13" r="17" fill={tinta} opacity=".06"/>
      {desenho}
    </svg>
  );
}
