
type Item = {
   label: string,
   link?: string,
   children?: { label: string; link: string }[]
}

const navData: Item[] = [
   { label: 'Главное', link: 'Basic' },
   { label: 'О вузе', link: 'University' },
   {
      label: 'Специальности',
      children: [
         { label: 'бакалавриат', link: 'Bachelor' },
         { label: 'магистратура', link: 'Master' },
         { label: 'колледж', link: 'College' },
         { label: 'техникум', link: 'TechnikalSchool' }
      ]
   },
   { label: 'Инструкция для поступления', link: 'Instructure' },
   { label: 'Приемная коммиссия', link: 'AdmissionCenter' },
   { label: 'Международное сотрудничество', link: 'Cooperation' },
   { label: 'Контакты', link: 'Contacts' },
   { label: 'Фото галлерея', link: 'Gallery' },
]

export default navData