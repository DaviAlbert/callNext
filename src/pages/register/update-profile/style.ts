import { Box, styled, Text } from '@ignite-ui/react'
export const ProfileBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  label: {
    display: 'flex',
    flexDirection: 'column',
    textAlign:'center',
    gap: '$2',
  },
})
export const FormAnnotation = styled(Text, {
  color: '$gray200',
})