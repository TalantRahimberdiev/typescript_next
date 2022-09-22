
import { Box, NavLink } from '@mantine/core'
import Link from 'next/link';
import { useRouter } from 'next/router';
import navData from './navData'
import uuid from 'react-uuid';

export default function NavElements() {
   const router = useRouter()
   const items = navData.map(item => (
      <Link key={uuid()} href={`${item.link}`} passHref>
         <NavLink component="a" label={item.label} active={router.pathname === `/${item.link}`} color="teal">
            {
               item.children && item.children.map(child => (
                  <Link key={uuid()} href={`${child.link}`} passHref>
                     <NavLink component="a" label={child.label} active={router.pathname === `/${child.link}`} color="teal" />
                  </Link>
               ))
            }
         </NavLink>
      </Link>
   ))
   return <Box>{items}</Box>
}