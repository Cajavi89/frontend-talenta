export interface IText {
  id: string
  text: string
}

export interface ITextDTO extends Pick<IText, 'text'> {}
