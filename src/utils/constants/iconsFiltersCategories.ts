type ISelectedFilter = "business" | "language" | "professional" | "softwareDevelopment" | "";
interface IIconProps {
   iconLeft: string;
   size: number;
   label: string;
   iconRight: string;
   filter: ISelectedFilter;
};

const icons: IIconProps[] = [
   {
      iconLeft: 'code',
      size: 24,
      label: 'Linguagem',
      iconRight: 'keyboard-arrow-right',
      filter: "language"
   },
   {
      iconLeft: 'emoji-people',
      size: 24,
      label: 'Recursos Humanos',
      iconRight: 'keyboard-arrow-right',
      filter: "professional"
   },
   {
      iconLeft: 'auto-awesome-motion',
      size: 24,
      label: 'Metodologias',
      iconRight: 'keyboard-arrow-right',
      filter: "softwareDevelopment"
   },
   {
      iconLeft: 'add-business',
      size: 24,
      label: 'Empresas',
      iconRight: 'keyboard-arrow-right',
      filter: "business"
   },
];

export { icons };