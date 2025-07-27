export type ColumnT = {
  title: string;
  key?: string;
  type?: 'text' | 'profile' | 'chip' | 'action' | 'kebab';
  secondaryTextKey?: string;

  imageKey?: string;
  firstNameKey?: string;
  lastNameKey?: string;
  nameKey?: string; 
  
  chipValueKey?: string; 
  chipStyleKey?: string; 
  
  actionLabel?: string;
  actionHandler?: (row: Record<string, any>) => void;
  actionClass?: string;
  kebabHandler?: (row: Record<string, any>) => void;
};

export type RowT = Record<string, any>;

export interface TablePropsI {
  columns: ColumnT[];
  rows: RowT[];
}