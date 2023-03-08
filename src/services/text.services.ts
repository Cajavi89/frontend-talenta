import { IText, ITextDTO } from '../types/text'

export const getAllTexts = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/texts')
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export const saveNewText = async (data: ITextDTO) => {
  return await fetch('http://localhost:3001/api/texts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
