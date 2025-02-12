import { Box, styled, Text } from '@ignite-ui/react'

export const Container = styled(Box, {
  margin: '$6 auto',
  padding: 0,
  display: 'flex',
  gap: '$4', // Adiciona espaçamento entre o calendário e o seletor de horário
  position: 'relative',

  '@media (max-width: 900px)': {
    flexDirection: 'column', // No celular, os itens ficam empilhados
  },
})


export const TimePicker = styled('div', {
  borderLeft: '1px solid $gray600',
  padding: '$6 $6 0',
  overflowY: 'auto',
  width: '38222%',
  backgroundColor: '$gray800',
  '@media (max-width: 900px)': {
    width: '100%', // No celular, os itens ficam empilhados
  },
})


export const TimePickerHeader = styled(Text, {
  fontWeight: '$medium',
  textAlign:'center',

  span: {
    color: '$gray200',
  },
})

export const TimePickerList = styled('div', {
  marginTop: '$3',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$2',

  '@media (max-width: 900px)': {
    gridTemplateColumns: '2fr',
  },
})

export const TimePickerItem = styled('button', {
  border: 0,
  backgroundColor: '$gray600',
  padding: '$2 0',
  cursor: 'pointer',
  color: '$gray100',
  borderRadius: '$sm',
  fontSize: '$sm',
  lineHeight: '$base',

  '&:last-child': {
    marginBottom: '$6',
  },

  '&:disabled': {
    background: 'none',
    cursor: 'default',
    opacity: 0.4,
  },

  '&:not(:disabled):hover': {
    background: '$gray500',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },
})