export type Language = 'en' | 'am';

export interface ServiceItem {
  id: string;
  key: 'connect' | 'build' | 'academy' | 'labs';
  title: {
    en: string;
    am: string;
  };
  subtitle: {
    en: string;
    am: string;
  };
  description: {
    en: string;
    am: string;
  };
  image: string;
  iconName: string;
  color: string;
  borderColor: string;
  bgGlow: string;
  features: {
    en: string[];
    am: string[];
  };
}

export interface ProjectItem {
  id: string;
  name: {
    en: string;
    am: string;
  };
  category: {
    en: string;
    am: string;
  };
  shortDescription: {
    en: string;
    am: string;
  };
  fullDescription: {
    en: string;
    am: string;
  };
  screenshot: string;
  tags: string[];
  accentColor: string;
  features: {
    en: string[];
    am: string[];
  };
  impactMetric: {
    en: string;
    am: string;
  };
  liveDemoUrl?: string;
  githubUrl?: string;
}

export interface ValueItem {
  id: string;
  title: {
    en: string;
    am: string;
  };
  description: {
    en: string;
    am: string;
  };
  icon: string;
  color: string;
}

export interface ImpactStat {
  id: string;
  value: string;
  label: {
    en: string;
    am: string;
  };
  icon: string;
  color: string;
}
