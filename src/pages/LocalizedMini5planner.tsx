import { track } from '@vercel/analytics'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Seo, { BASE_URL } from '../components/Seo'
import LangSwitch from '../components/LangSwitch'
import { Arrow, Check } from '../components/Icons'
import {
  BUY_PRO_URL,
  DOWNLOAD_MAC_URL,
  DOWNLOAD_WINDOWS_URL,
  LANDING_ALTERNATES,
  MINI5PLANNER_PATHS,
  RELEASES_URL,
  type Mini5plannerLanguage,
} from '../lib/mini5planner'
import styles from './Programvare.module.css'
import media from './Mini5plannerMedia.module.css'

type LocalizedLanguage = Exclude<Mini5plannerLanguage, 'nb' | 'en'>

type Copy = {
  title: string
  description: string
  maker: string
  tag: string
  heading: string
  accent: string
  intro: string
  mac: string
  windows: string
  proLink: string
  free: string
  demoCaption: string
  howLabel: string
  howHeading: string
  howIntro: string
  cards: Array<{ title: string; text: string; points: string[] }>
  dronesHeading: string
  dronesText: string
  proLabel: string
  proHeading: string
  proText: string
  proPoints: string[]
  buy: string
  lifetime: string
}

const COPY: Record<LocalizedLanguage, Copy> = {
  de: {
    title: 'Mini5Planner – DJI-Kartierungsflüge und Rastermissionen',
    description: 'Kostenloser Flugplaner für Mac und Windows. Gebiet zeichnen und eine KMZ-Rastermission für DJI Fly erstellen.',
    maker: 'Von AnleggTech AS, Norwegen', tag: 'DJI-Drohnenkartierung',
    heading: 'Gebiet zeichnen.', accent: 'Raster in DJI Fly fliegen.',
    intro: 'Mini5Planner ist ein kostenloser Flugplaner für Mac und Windows. Zeichne ein Gebiet, wähle eine Vorlage und exportiere eine KMZ-Mission für DJI Fly.',
    mac: 'Kostenlos für Mac', windows: 'Kostenlos für Windows', proLink: 'Mini5Planner Pro ansehen',
    free: 'Kostenlos herunterladen und verwenden. Die Installer sind auch auf GitHub verfügbar.',
    demoCaption: 'Gebiet zeichnen, Mission wählen und die KMZ auf den DJI RC 2 kopieren.',
    howLabel: 'So funktioniert es', howHeading: 'Gebiet zeichnen → KMZ exportieren → fliegen',
    howIntro: 'DJI Fly hat Wegpunkte, aber keinen Rastergenerator. Mini5Planner berechnet Route, Abstand und Fotoüberlappung.',
    cards: [
      { title: 'Rastermissionen', text: 'Abstand und Fotointervall werden aus Kamera, Höhe und gewünschter Überlappung berechnet.', points: ['Einfach- oder Kreuzraster', 'GSD und Flugzeit live', 'Senkrechte oder schräge Kamera'] },
      { title: 'Vorlagen', text: 'Vorlagen für Baustellen, Gruben, Fassaden und Straßenkorridore.', points: ['Schneller Start', 'Einstellungen bleiben anpassbar', 'Sieben DJI-Drohnen'] },
      { title: 'Direkt zum DJI RC 2', text: 'Die integrierte Anleitung zeigt die Übertragung per USB-C.', points: ['WPML-1.0.2-KMZ', 'Windows und Mac', 'Automatische Updates'] },
    ],
    dronesHeading: 'Unterstützte Drohnen', dronesText: 'DJI Mini 5 Pro, Mini 4 Pro, Air 3, Air 3S, Mavic 3, Mavic 3 Pro und Mavic 4 Pro.',
    proLabel: 'Einmalkauf', proHeading: 'Mini5Planner Pro', proText: 'Pro ergänzt Geländefolge und automatische Aufteilung auf mehrere Akkus.',
    proPoints: ['Geländefolge weltweit', 'Aufteilung nach Akku', 'Lebenslange Lizenz, kein Abo'], buy: 'Pro kaufen', lifetime: 'Einmal zahlen. Dauerhaft nutzen.',
  },
  fr: {
    title: 'Mini5Planner – missions de cartographie DJI', description: 'Planificateur de vol gratuit pour Mac et Windows. Dessinez une zone et créez une mission quadrillée KMZ pour DJI Fly.',
    maker: 'Par AnleggTech AS, Norvège', tag: 'Cartographie par drone DJI', heading: 'Dessinez la zone.', accent: 'Volez la grille dans DJI Fly.',
    intro: 'Mini5Planner est un planificateur gratuit pour Mac et Windows. Dessinez une zone, choisissez un modèle et exportez une mission KMZ pour DJI Fly.',
    mac: 'Télécharger pour Mac', windows: 'Télécharger pour Windows', proLink: 'Voir Mini5Planner Pro', free: 'Téléchargement et utilisation gratuits. Les installateurs sont aussi sur GitHub.',
    demoCaption: 'Dessinez la zone, choisissez la mission puis copiez le KMZ sur la DJI RC 2.', howLabel: 'Fonctionnement', howHeading: 'Dessiner → exporter le KMZ → voler',
    howIntro: 'DJI Fly propose des points de passage, mais pas de générateur de grille. Mini5Planner calcule la route et le recouvrement photo.',
    cards: [
      { title: 'Missions quadrillées', text: 'Espacement et intervalle photo calculés selon la caméra, l’altitude et le recouvrement.', points: ['Grille simple ou croisée', 'GSD et durée en direct', 'Caméra verticale ou oblique'] },
      { title: 'Modèles de mission', text: 'Modèles pour chantier, excavation, carrière, façade et corridor routier.', points: ['Démarrage rapide', 'Réglages modifiables', 'Sept drones DJI'] },
      { title: 'Vers la DJI RC 2', text: 'Le guide intégré explique le transfert par USB-C.', points: ['KMZ WPML 1.0.2', 'Windows et Mac', 'Mises à jour automatiques'] },
    ],
    dronesHeading: 'Drones compatibles', dronesText: 'DJI Mini 5 Pro, Mini 4 Pro, Air 3, Air 3S, Mavic 3, Mavic 3 Pro et Mavic 4 Pro.', proLabel: 'Achat unique', proHeading: 'Mini5Planner Pro',
    proText: 'Pro ajoute le suivi du terrain et la répartition automatique sur plusieurs batteries.', proPoints: ['Suivi du terrain mondial', 'Répartition par batterie', 'Licence à vie, sans abonnement'], buy: 'Acheter Pro', lifetime: 'Un seul paiement. Utilisation permanente.',
  },
  es: {
    title: 'Mini5Planner – misiones de mapeo DJI', description: 'Planificador de vuelo gratuito para Mac y Windows. Dibuja un área y crea una misión de cuadrícula KMZ para DJI Fly.',
    maker: 'De AnleggTech AS, Noruega', tag: 'Mapeo con drones DJI', heading: 'Dibuja el área.', accent: 'Vuela la cuadrícula en DJI Fly.',
    intro: 'Mini5Planner es un planificador gratuito para Mac y Windows. Dibuja un área, elige una plantilla y exporta una misión KMZ para DJI Fly.',
    mac: 'Descargar para Mac', windows: 'Descargar para Windows', proLink: 'Ver Mini5Planner Pro', free: 'Descarga y uso gratuitos. Los instaladores también están en GitHub.',
    demoCaption: 'Dibuja el área, elige la misión y copia el KMZ al DJI RC 2.', howLabel: 'Cómo funciona', howHeading: 'Dibuja → exporta KMZ → vuela',
    howIntro: 'DJI Fly tiene puntos de ruta, pero no genera cuadrículas. Mini5Planner calcula la ruta y el solape fotográfico.',
    cards: [
      { title: 'Misiones de cuadrícula', text: 'Calcula separación e intervalo según cámara, altura y solape.', points: ['Cuadrícula simple o cruzada', 'GSD y tiempo en directo', 'Cámara vertical u oblicua'] },
      { title: 'Plantillas', text: 'Plantillas para obra, excavación, cantera, fachada y corredor vial.', points: ['Inicio rápido', 'Ajustes editables', 'Siete drones DJI'] },
      { title: 'Directo al DJI RC 2', text: 'La guía integrada explica la transferencia por USB-C.', points: ['KMZ WPML 1.0.2', 'Windows y Mac', 'Actualizaciones automáticas'] },
    ], dronesHeading: 'Drones compatibles', dronesText: 'DJI Mini 5 Pro, Mini 4 Pro, Air 3, Air 3S, Mavic 3, Mavic 3 Pro y Mavic 4 Pro.', proLabel: 'Pago único', proHeading: 'Mini5Planner Pro',
    proText: 'Pro añade seguimiento del terreno y división automática por baterías.', proPoints: ['Seguimiento del terreno mundial', 'División por batería', 'Licencia de por vida, sin suscripción'], buy: 'Comprar Pro', lifetime: 'Un pago. Uso permanente.',
  },
  pt: {
    title: 'Mini5Planner – missões de mapeamento DJI', description: 'Planeador de voo gratuito para Mac e Windows. Desenhe uma área e crie uma missão de grelha KMZ para DJI Fly.', maker: 'Da AnleggTech AS, Noruega',
    tag: 'Mapeamento com drones DJI', heading: 'Desenhe a área.', accent: 'Voe a grelha no DJI Fly.', intro: 'Mini5Planner é um planeador gratuito para Mac e Windows. Desenhe uma área, escolha um modelo e exporte uma missão KMZ para DJI Fly.',
    mac: 'Transferir para Mac', windows: 'Transferir para Windows', proLink: 'Ver Mini5Planner Pro', free: 'Transferência e utilização gratuitas. Os instaladores também estão no GitHub.', demoCaption: 'Desenhe a área, escolha a missão e copie o KMZ para o DJI RC 2.',
    howLabel: 'Como funciona', howHeading: 'Desenhar → exportar KMZ → voar', howIntro: 'O DJI Fly tem pontos de passagem, mas não cria grelhas. O Mini5Planner calcula a rota e a sobreposição das fotografias.',
    cards: [
      { title: 'Missões em grelha', text: 'Calcula espaçamento e intervalo a partir da câmara, altitude e sobreposição.', points: ['Grelha simples ou cruzada', 'GSD e tempo em direto', 'Câmara vertical ou oblíqua'] },
      { title: 'Modelos', text: 'Modelos para obra, escavação, pedreira, fachada e corredor rodoviário.', points: ['Início rápido', 'Definições editáveis', 'Sete drones DJI'] },
      { title: 'Direto para o DJI RC 2', text: 'O guia integrado explica a transferência por USB-C.', points: ['KMZ WPML 1.0.2', 'Windows e Mac', 'Atualizações automáticas'] },
    ], dronesHeading: 'Drones compatíveis', dronesText: 'DJI Mini 5 Pro, Mini 4 Pro, Air 3, Air 3S, Mavic 3, Mavic 3 Pro e Mavic 4 Pro.', proLabel: 'Compra única', proHeading: 'Mini5Planner Pro', proText: 'O Pro adiciona seguimento do terreno e divisão automática por baterias.', proPoints: ['Seguimento do terreno mundial', 'Divisão por bateria', 'Licença vitalícia, sem subscrição'], buy: 'Comprar Pro', lifetime: 'Um pagamento. Utilização permanente.',
  },
  it: {
    title: 'Mini5Planner – missioni di mappatura DJI', description: 'Pianificatore di volo gratuito per Mac e Windows. Disegna un’area e crea una missione a griglia KMZ per DJI Fly.', maker: 'Di AnleggTech AS, Norvegia', tag: 'Mappatura con droni DJI',
    heading: 'Disegna l’area.', accent: 'Vola la griglia in DJI Fly.', intro: 'Mini5Planner è un pianificatore gratuito per Mac e Windows. Disegna un’area, scegli un modello ed esporta una missione KMZ per DJI Fly.', mac: 'Scarica per Mac', windows: 'Scarica per Windows', proLink: 'Scopri Mini5Planner Pro', free: 'Download e utilizzo gratuiti. Gli installer sono disponibili anche su GitHub.', demoCaption: 'Disegna l’area, scegli la missione e copia il KMZ sul DJI RC 2.',
    howLabel: 'Come funziona', howHeading: 'Disegna → esporta KMZ → vola', howIntro: 'DJI Fly offre waypoint ma non genera griglie. Mini5Planner calcola rotta e sovrapposizione delle foto.',
    cards: [
      { title: 'Missioni a griglia', text: 'Calcola spaziatura e intervallo da fotocamera, quota e sovrapposizione.', points: ['Griglia singola o incrociata', 'GSD e durata in tempo reale', 'Fotocamera verticale o obliqua'] },
      { title: 'Modelli', text: 'Modelli per cantiere, scavo, cava, facciata e corridoio stradale.', points: ['Avvio rapido', 'Impostazioni modificabili', 'Sette droni DJI'] },
      { title: 'Direttamente sul DJI RC 2', text: 'La guida integrata spiega il trasferimento USB-C.', points: ['KMZ WPML 1.0.2', 'Windows e Mac', 'Aggiornamenti automatici'] },
    ], dronesHeading: 'Droni supportati', dronesText: 'DJI Mini 5 Pro, Mini 4 Pro, Air 3, Air 3S, Mavic 3, Mavic 3 Pro e Mavic 4 Pro.', proLabel: 'Acquisto singolo', proHeading: 'Mini5Planner Pro', proText: 'Pro aggiunge il volo a quota costante sul terreno e la divisione automatica per batterie.', proPoints: ['Seguimento del terreno globale', 'Divisione per batteria', 'Licenza a vita, nessun abbonamento'], buy: 'Acquista Pro', lifetime: 'Un solo pagamento. Uso permanente.',
  },
  nl: {
    title: 'Mini5Planner – DJI-karteringsmissies', description: 'Gratis vluchtplanner voor Mac en Windows. Teken een gebied en maak een KMZ-rastermissie voor DJI Fly.', maker: 'Door AnleggTech AS, Noorwegen', tag: 'DJI-dronekartering', heading: 'Teken het gebied.', accent: 'Vlieg het raster in DJI Fly.',
    intro: 'Mini5Planner is een gratis vluchtplanner voor Mac en Windows. Teken een gebied, kies een sjabloon en exporteer een KMZ-missie voor DJI Fly.', mac: 'Gratis voor Mac', windows: 'Gratis voor Windows', proLink: 'Bekijk Mini5Planner Pro', free: 'Gratis te downloaden en te gebruiken. De installers staan ook op GitHub.', demoCaption: 'Teken het gebied, kies de missie en kopieer de KMZ naar de DJI RC 2.', howLabel: 'Zo werkt het', howHeading: 'Tekenen → KMZ exporteren → vliegen', howIntro: 'DJI Fly heeft waypoints, maar geen rastergenerator. Mini5Planner berekent de route en foto-overlap.',
    cards: [
      { title: 'Rastermissies', text: 'Berekent afstand en foto-interval uit camera, hoogte en overlap.', points: ['Enkel of gekruist raster', 'Live GSD en vliegtijd', 'Verticale of schuine camera'] },
      { title: 'Missiesjablonen', text: 'Sjablonen voor bouwplaats, uitgraving, groeve, gevel en wegcorridor.', points: ['Snel beginnen', 'Instellingen aanpasbaar', 'Zeven DJI-drones'] },
      { title: 'Rechtstreeks naar DJI RC 2', text: 'De ingebouwde gids toont de USB-C-overdracht.', points: ['WPML 1.0.2 KMZ', 'Windows en Mac', 'Automatische updates'] },
    ], dronesHeading: 'Ondersteunde drones', dronesText: 'DJI Mini 5 Pro, Mini 4 Pro, Air 3, Air 3S, Mavic 3, Mavic 3 Pro en Mavic 4 Pro.', proLabel: 'Eenmalige aankoop', proHeading: 'Mini5Planner Pro', proText: 'Pro voegt terreinvolging en automatische batterijverdeling toe.', proPoints: ['Wereldwijde terreinvolging', 'Verdeling per batterij', 'Levenslange licentie, geen abonnement'], buy: 'Koop Pro', lifetime: 'Eenmalig betalen. Blijvend gebruiken.',
  },
  pl: {
    title: 'Mini5Planner – misje mapowania DJI', description: 'Darmowy planer lotu dla Mac i Windows. Narysuj obszar i utwórz misję siatki KMZ dla DJI Fly.', maker: 'AnleggTech AS, Norwegia', tag: 'Mapowanie dronami DJI', heading: 'Narysuj obszar.', accent: 'Wykonaj siatkę w DJI Fly.', intro: 'Mini5Planner to darmowy planer dla Mac i Windows. Narysuj obszar, wybierz szablon i wyeksportuj misję KMZ do DJI Fly.', mac: 'Pobierz dla Mac', windows: 'Pobierz dla Windows', proLink: 'Zobacz Mini5Planner Pro', free: 'Pobieranie i używanie jest bezpłatne. Instalatory są też na GitHubie.', demoCaption: 'Narysuj obszar, wybierz misję i skopiuj KMZ do DJI RC 2.', howLabel: 'Jak to działa', howHeading: 'Narysuj → eksportuj KMZ → leć', howIntro: 'DJI Fly ma punkty trasy, ale nie generator siatki. Mini5Planner oblicza trasę i pokrycie zdjęć.',
    cards: [
      { title: 'Misje siatkowe', text: 'Oblicza odstęp i interwał na podstawie kamery, wysokości i pokrycia.', points: ['Siatka pojedyncza lub krzyżowa', 'GSD i czas lotu na żywo', 'Kamera pionowa lub ukośna'] },
      { title: 'Szablony', text: 'Szablony dla budowy, wykopu, kopalni, elewacji i korytarza drogowego.', points: ['Szybki start', 'Edytowalne ustawienia', 'Siedem dronów DJI'] },
      { title: 'Prosto do DJI RC 2', text: 'Wbudowany przewodnik pokazuje transfer przez USB-C.', points: ['KMZ WPML 1.0.2', 'Windows i Mac', 'Automatyczne aktualizacje'] },
    ], dronesHeading: 'Obsługiwane drony', dronesText: 'DJI Mini 5 Pro, Mini 4 Pro, Air 3, Air 3S, Mavic 3, Mavic 3 Pro i Mavic 4 Pro.', proLabel: 'Zakup jednorazowy', proHeading: 'Mini5Planner Pro', proText: 'Pro dodaje lot ze śledzeniem terenu i automatyczny podział na akumulatory.', proPoints: ['Śledzenie terenu na całym świecie', 'Podział według akumulatora', 'Licencja wieczysta, bez abonamentu'], buy: 'Kup Pro', lifetime: 'Jedna płatność. Stałe użytkowanie.',
  },
  ja: {
    title: 'Mini5Planner – DJIマッピング飛行プランナー', description: 'MacとWindows対応の無料飛行プランナー。エリアを描画し、DJI Fly用のKMZグリッドミッションを作成できます。', maker: 'ノルウェー AnleggTech AS 開発', tag: 'DJIドローンマッピング', heading: 'エリアを描画。', accent: 'DJI Flyでグリッド飛行。', intro: 'Mini5PlannerはMacとWindows対応の無料プランナーです。エリアとテンプレートを選び、DJI Fly用KMZミッションを出力します。', mac: 'Mac版を無料ダウンロード', windows: 'Windows版を無料ダウンロード', proLink: 'Mini5Planner Proを見る', free: '無料でダウンロード・利用できます。インストーラーはGitHubにもあります。', demoCaption: 'エリアとミッションを選び、KMZをDJI RC 2にコピーします。', howLabel: '使い方', howHeading: '描画 → KMZ出力 → 飛行', howIntro: 'DJI Flyにはウェイポイントはありますが、グリッド生成機能はありません。Mini5Plannerが飛行経路と写真のオーバーラップを計算します。',
    cards: [
      { title: 'グリッドミッション', text: 'カメラ、高度、オーバーラップから間隔と撮影間隔を計算します。', points: ['シングルまたはクロスグリッド', 'GSDと飛行時間をリアルタイム表示', '垂直または斜め撮影'] },
      { title: 'ミッションテンプレート', text: '建設現場、掘削、採石場、建物外観、道路用のテンプレートを用意。', points: ['すぐに開始', '設定は調整可能', 'DJIドローン7機種に対応'] },
      { title: 'DJI RC 2へ直接転送', text: '内蔵ガイドがUSB-C転送を案内します。', points: ['WPML 1.0.2 KMZ', 'WindowsとMac', '自動アップデート'] },
    ], dronesHeading: '対応ドローン', dronesText: 'DJI Mini 5 Pro、Mini 4 Pro、Air 3、Air 3S、Mavic 3、Mavic 3 Pro、Mavic 4 Pro。', proLabel: '買い切り', proHeading: 'Mini5Planner Pro', proText: 'Proでは地形追従とバッテリー単位の自動分割が使えます。', proPoints: ['世界対応の地形追従', 'バッテリー別に分割', 'サブスクリプション不要の永続ライセンス'], buy: 'Proを購入', lifetime: '一度の支払いで永続利用。',
  },
}

export default function LocalizedMini5planner({ language }: { language: LocalizedLanguage }) {
  const copy = COPY[language]
  const path = MINI5PLANNER_PATHS[language]
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Mini5Planner',
    applicationCategory: 'UtilitiesApplication', operatingSystem: 'macOS, Windows',
    inLanguage: language, url: `${BASE_URL}${path}`, downloadUrl: RELEASES_URL,
    description: copy.description,
  }
  return (
    <>
      <Seo title={copy.title} description={copy.description} path={path} lang={language} alternates={LANDING_ALTERNATES} jsonLd={jsonLd} />
      <Navbar lang="en" basePath={path} />
      <main className={styles.main}>
        <section id="download" className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={`${styles.backRow} ${styles.backRowSplit}`}>
              <span>{copy.maker}</span><LangSwitch current={language} />
            </div>
            <span className={styles.tag}>{copy.tag}</span>
            <h1 className={styles.title}>{copy.heading} <span className={styles.accent}>{copy.accent}</span></h1>
            <p className={styles.subtitle}>{copy.intro}</p>
            <div className={`${styles.heroCtas} ${styles.downloadCtas}`}>
              <a href={DOWNLOAD_MAC_URL} className={styles.ctaPrimary} onClick={() => track('Nedlasting', { plattform: 'mac', language })}>{copy.mac}<Arrow /></a>
              <a href={DOWNLOAD_WINDOWS_URL} className={styles.ctaPrimary} onClick={() => track('Nedlasting', { plattform: 'windows', language })}>{copy.windows}<Arrow /></a>
              <a href="#pro" className={styles.ctaSecondary}>{copy.proLink}</a>
            </div>
            <p className={styles.heroSubnote}>{copy.free} <a href={RELEASES_URL} target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
            <figure className={media.demo}>
              <video src="/videos/mini5planner-demo.mp4" poster="/images/mini5planner/1-single-grid.jpg" autoPlay muted loop playsInline preload="metadata" />
              <figcaption>{copy.demoCaption}</figcaption>
            </figure>
          </div>
        </section>
        <section id="features" className={styles.product}>
          <div className={`container ${styles.productInner}`}>
            <div className={styles.productHeader}>
              <span className={styles.productLabel}>{copy.howLabel}</span><h2 className={styles.productHeading}>{copy.howHeading}</h2><p className={styles.productLead}>{copy.howIntro}</p>
            </div>
            <div className={styles.useCases}>{copy.cards.map((card) => <article key={card.title} className={styles.useCase}><h3 className={styles.useCaseTitle}>{card.title}</h3><p className={styles.useCaseDesc}>{card.text}</p><ul className={styles.useCasePoints}>{card.points.map((point) => <li key={point}><Check />{point}</li>)}</ul></article>)}</div>
            <div className={styles.audienceBlock}><h2 className={styles.audienceHeading}>{copy.dronesHeading}</h2><p className={styles.audienceLead}>{copy.dronesText}</p></div>
          </div>
        </section>
        <section id="pro" className={styles.proSection}>
          <div className={`container ${styles.proInner}`}>
            <div className={styles.productHeader}><span className={styles.productLabel}>{copy.proLabel}</span><h2 className={styles.productHeading}>{copy.proHeading}</h2><p className={styles.productLead}>{copy.proText}</p></div>
            <ul className={styles.useCasePoints}>{copy.proPoints.map((point) => <li key={point}><Check />{point}</li>)}</ul>
            <div className={styles.heroCtas}><a href={BUY_PRO_URL} className={styles.ctaPrimary} onClick={() => track('Kjop Pro', { language })}>{copy.buy}<Arrow /></a></div>
            <p className={styles.heroSubnote}>{copy.lifetime}</p>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  )
}
