
import { InferGetStaticPropsType } from 'next'
import getMaster from '../../types_requests/master'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useRouter } from 'next/router';

export const getStaticProps = async () => {
   const master = await getMaster()
   return {
      props: {
         master,
      },
   };
};

export default function Master({ master }: InferGetStaticPropsType<typeof getStaticProps>) {
   console.log(master)
   const router = useRouter()

   const linking=()=>{
      router.push({
         pathname:'[details]',
         query:{details: master.name}
      })
   }

   return (
      <Card shadow="sm" p="lg" radius="md" withBorder>
         <Card.Section>
            <Image
               src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
               height={160}
               alt="Norway"
            />
         </Card.Section>

         <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>{master.name}</Text>
            <Badge color="pink" variant="light">код: {master.code}</Badge>
         </Group>

         <Text size="sm" color="dimmed">{master.description}</Text>

         <Button onClick={() => linking()} variant="light" color="blue" fullWidth mt="md" radius="md">
            детали
         </Button>
      </Card>
   )
}










