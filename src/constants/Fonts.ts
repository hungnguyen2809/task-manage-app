export type FontStyle = 'normal' | 'italic' | 'semi' | 'semi-italic' | 'bold' | 'bold-italic';

type FontsMapType = {
  [T in FontStyle]: string;
};

export const FontSize = {
  DEFAUTL: 14,
};

export const Fonts = {
  ITALIC: 'PFBeauSansPro-Italic',
  REGULAR: 'PFBeauSansPro-Regular',
  BOLD: 'PFBeauSansPro-Bold',
  BOLD_ITALIC: 'PFBeauSansPro-BoldItalic',
  SEMI: 'PFBeauSansPro-SemiBold',
  SEMI_ITALIC: 'PFBeauSansPro-SemiBoldItalic',
};

export const FontsMap: FontsMapType = {
  normal: Fonts.REGULAR,
  italic: Fonts.ITALIC,
  semi: Fonts.SEMI,
  'semi-italic': Fonts.SEMI_ITALIC,
  bold: Fonts.BOLD,
  'bold-italic': Fonts.BOLD_ITALIC,
};
