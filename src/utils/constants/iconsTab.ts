import { 
  FontAwesome,
  Foundation, 
  AntDesign,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons';

export const iconsTabs = {
   HomeTab: {
     Icon: Foundation,
     name: 'home',
     size: 24,
     title: 'Mr.book',
   },
   FavoritesTab: {
     Icon: Foundation,
     name: 'heart',
     size: 24,
     title: 'Favoritos',
   },
   BooksTab: {
     Icon: AntDesign,
     name: 'calendar',
     size: 24,
     title: 'Reservas',
   },
   ProfileTab: {
     Icon: FontAwesome,
     name: 'user-circle',
     size: 24,
     title: 'Perfil',
   },
 };
 
 export const IconsContact = [
   {
     IconContact: FontAwesome5,
     name: 'facebook-f',
     size: 24,
     title: 'Facebook',
     color: '#3B5997',
   },
   {
     IconContact: AntDesign,
     name: 'instagram',
     size: 24,
     title: 'Instagram',
     color: '#2C2C36',
   },
   {
     IconContact: FontAwesome5,
     name: 'globe-americas',
     size: 24,
     title: 'Website',
     color: '#2C2C36',
   },
   {
     IconContact: MaterialIcons,
     name: 'phone-in-talk',
     size: 24,
     title: 'Ligar',
     color: '#2C2C36',
   },
 ]