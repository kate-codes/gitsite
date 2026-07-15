// Type definitions for the application
export interface HelloWorldCardProps {
  onButtonClick: () => void;
}

export interface PaletteViewProps {
  onBack: () => void;
}

export interface NavBarProps {
  onNavClick: (section: string) => void;
  onHomeClick: () => void;
  activeSection: string;
}
