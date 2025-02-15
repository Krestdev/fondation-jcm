import { LightboxDataitem, LightBoxImage } from "./type";


export const services = [
  {
    name: "Imagerie médicale",
    description:
      "Examens pour un diagnostic précis grâce aux technologies d’imagerie avancées.",
  },
  {
    name: "Radiologie",
    description:
      "Services spécialisés pour l’identification et le suivi des pathologies.",
  },
  {
    name: "Pédiatrie",
    description:
      "Soins médicaux dédiés aux enfants pour leur santé et leur bien-être.",
  },
  {
    name: "Oncologie",
    description:
      "Prise en charge des patients atteints de cancer avec des traitements adaptés.",
  },
  {
    name: "Cardiologie",
    description:
      "Services pour le dépistage, la prévention et le traitement des maladies cardiaques.",
  },
  {
    name: "Médecine générale",
    description:
      "Consultations pour une gestion globale de la santé et des soins primaires.",
  },
];

export const whyDonate = [
  "Aidez à financer des campagnes de dépistage des cancers et autres maladies.",
  "Contribuez à l’équipement et au fonctionnement des services médicaux.",
  "Participez à l’amélioration des conditions de santé dans les zones rurales.",
];

export const howContribute = [
  "Par un don en ligne via notre plateforme sécurisée.",
  "En offrant du matériel médical ou des fournitures.",
  "En devenant partenaire pour soutenir nos initiatives.",
];

export const donate = {
  orangemoney: "(+237) 697 06 00 05",
  omName: "Nestor MFEGE",
  bankAccount: "06863 71123663001 95",
  iban: "CM2110001068637112366300195",
};

export const contact = {
  phone: "+237697060005",
  email: "infos@fondationjeannecarolinemfege.org",
};

export const images: LightBoxImage[] = [
  {
    src: "images/galerie/1.webp",
    title: "Déboisement",
    description:
      "Début des travaux de terrassement par le déboisement de la zone",
      id:1,
      group: "terassement"
  },
  {
    src: "images/galerie/3d.webp",
    title: "La Future Fondation",
    description: "Modèle 3d de la fondation",
    id: 7,
    group: "à terme"
  },
  {
    src: "images/galerie/Accueil.webp",
    title: "Accueil de la fondation",
    description:
      "Avancé des travaux de construction de l'accueil de la fondation",
      group: "en cours"
  },
  {
    src: "images/galerie/catepilar.webp",
    title: "Terrassement",
    description: "Début des travaux de terrassement",
    id:0,
    group: "terassement"
  },
  {
    src: "images/galerie/catepilar2.webp",
    title: "Terrassement Catepilar",
    description: "Suite des travaux de terrassement",
    id:3,
    group: "terassement"
  },
  {
    src: "images/galerie/Medecine-Generale.webp",
    title: "Bâtiment Médecine Générale",
    description: "Gros oeuvre du bâtiment de médecine générale",
    group:"en cours"
  },
  {
    src: "images/galerie/catepilar3.webp",
    title: "Terrassement Catepilar",
    description: "Suite des travaux de terrassement",
    id:2,
    group: "terassement"
  },
  {
    src: "images/galerie/study.webp",
    title: "Etudes topographiques",
    description: "Equipe des études topographiques pour l'analyse du terrain",
    id: 5,
    group: "terassement"
  },
  {
    src: "images/galerie/team.webp",
    title: "Equipe topographique",
    description: "Equipe chargée de la réalisation de l'étude topographique",
    id: 4,
    group: "terassement"
  },
  {
    src: "images/galerie/Urgence.webp",
    title: "Bâtiment des urgences",
    description: "Gros oeuvre du bâtiment des urgences",
    group: "en cours"
  },
  {
    src: "images/galerie/Vue-arriere.webp",
    title: "Bâtiment en construction",
    description: "Vue arrière des bâtiments de la fondation",
    group: "en cours"
  },
  {
    src: "images/galerie/Vue-laterale2.webp",
    title: "Bâtiment en construction",
    description: "Vue laterale d'un des bâtiments de la fondation",
    group: "en cours"
  },
];
