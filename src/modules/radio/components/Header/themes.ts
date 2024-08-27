export interface Theme {
    colorScheme: {
      background: string;
      title: string;
      subtitle: string;
      text: string;
    };
    fontSize: {
      title: string;
      subtitle: string;
      text: string;
    };
    position: string;
    padding: string;
  }
  
  export const themes: Record<string, Theme> = {
    corporativo: {
      colorScheme: {
        background: 'bg-gray-100',
        title: 'text-blue-900 bg-white bg-opacity-90',
        subtitle: 'text-blue-800 bg-blue-100 bg-opacity-90',
        text: 'text-gray-800 bg-white bg-opacity-80',
      },
      fontSize: {
        title: 'text-3xl lg:text-5xl',
        subtitle: 'text-xl lg:text-2xl',
        text: 'text-md lg:text-lg',
      },
      position: 'right-0',
      padding: 'p-6 md:p-10',
    },
    elegante: {
      colorScheme: {
        background: 'bg-black',
        title: 'text-white bg-purple-700 bg-opacity-90',
        subtitle: 'text-gray-300 bg-purple-500 bg-opacity-80',
        text: 'text-gray-100 bg-purple-400 bg-opacity-70',
      },
      fontSize: {
        title: 'text-4xl lg:text-6xl',
        subtitle: 'text-2xl lg:text-3xl',
        text: 'text-lg lg:text-xl',
      },
      position: 'right-0',
      padding: 'p-8 md:p-12',
    },
    vibrante: {
      colorScheme: {
        background: 'bg-yellow-500',
        title: 'text-red-600 bg-white bg-opacity-80',
        subtitle: 'text-red-500 bg-yellow-200 bg-opacity-70',
        text: 'text-red-800 bg-white bg-opacity-60',
      },
      fontSize: {
        title: 'text-3xl lg:text-4xl',
        subtitle: 'text-xl lg:text-2xl',
        text: 'text-md lg:text-lg',
      },
      position: 'right-0',
      padding: 'p-4 md:p-8',
    },
    minimalista: {
      colorScheme: {
        background: 'bg-white',
        title: 'text-black bg-transparent',
        subtitle: 'text-gray-700 bg-transparent',
        text: 'text-gray-800 bg-transparent',
      },
      fontSize: {
        title: 'text-2xl lg:text-3xl',
        subtitle: 'text-lg lg:text-xl',
        text: 'text-sm lg:text-md',
      },
      position: 'right-0',
      padding: 'p-2 md:p-4',
    },
    moderno: {
      colorScheme: {
        background: 'bg-blue-600',
        title: 'text-white bg-gray-800 bg-opacity-80',
        subtitle: 'text-gray-200 bg-blue-500 bg-opacity-70',
        text: 'text-gray-300 bg-gray-700 bg-opacity-60',
      },
      fontSize: {
        title: 'text-4xl lg:text-5xl',
        subtitle: 'text-2xl lg:text-3xl',
        text: 'text-lg lg:text-xl',
      },
      position: 'left-0',
      padding: 'p-6 md:p-10',
    },
    escuro: {
      colorScheme: {
        background: 'bg-gray-900',
        title: 'text-white bg-black bg-opacity-90',
        subtitle: 'text-gray-400 bg-gray-800 bg-opacity-80',
        text: 'text-gray-200 bg-gray-700 bg-opacity-70',
      },
      fontSize: {
        title: 'text-3xl lg:text-4xl',
        subtitle: 'text-xl lg:text-2xl',
        text: 'text-md lg:text-lg',
      },
      position: 'right-0',
      padding: 'p-5 md:p-8',
    },
    claro: {
      colorScheme: {
        background: 'bg-white',
        title: 'text-gray-900 bg-gray-200 bg-opacity-90',
        subtitle: 'text-gray-700 bg-gray-100 bg-opacity-80',
        text: 'text-gray-800 bg-gray-50 bg-opacity-70',
      },
      fontSize: {
        title: 'text-3xl lg:text-5xl',
        subtitle: 'text-xl lg:text-2xl',
        text: 'text-md lg:text-lg',
      },
      position: 'left-0',
      padding: 'p-6 md:p-10',
    },
    nature: {
      colorScheme: {
        background: 'bg-green-600',
        title: 'text-white bg-green-800 bg-opacity-90',
        subtitle: 'text-gray-200 bg-green-500 bg-opacity-70',
        text: 'text-white bg-green-400 bg-opacity-60',
      },
      fontSize: {
        title: 'text-4xl lg:text-5xl',
        subtitle: 'text-2xl lg:text-3xl',
        text: 'text-lg lg:text-xl',
      },
      position: 'right-0',
      padding: 'p-6 md:p-10',
    },
    tropical: {
      colorScheme: {
        background: 'bg-orange-500',
        title: 'text-yellow-100 bg-red-700 bg-opacity-80',
        subtitle: 'text-yellow-200 bg-orange-600 bg-opacity-70',
        text: 'text-yellow-300 bg-red-500 bg-opacity-60',
      },
      fontSize: {
        title: 'text-3xl lg:text-4xl',
        subtitle: 'text-xl lg:text-2xl',
        text: 'text-md lg:text-lg',
      },
      position: 'right-0',
      padding: 'p-5 md:p-8',
    },
    neutro: {
      colorScheme: {
        background: 'bg-gray-200',
        title: 'text-gray-800 bg-white bg-opacity-90',
        subtitle: 'text-gray-700 bg-gray-100 bg-opacity-80',
        text: 'text-gray-600 bg-white bg-opacity-70',
      },
      fontSize: {
        title: 'text-3xl lg:text-5xl',
        subtitle: 'text-xl lg:text-2xl',
        text: 'text-md lg:text-lg',
      },
      position: 'left-0',
      padding: 'p-4 md:p-6',
    },
    fantasia: {
      colorScheme: {
        background: 'bg-purple-600',
        title: 'text-pink-100 bg-purple-800 bg-opacity-90',
        subtitle: 'text-pink-200 bg-purple-500 bg-opacity-80',
        text: 'text-pink-300 bg-purple-400 bg-opacity-70',
      },
      fontSize: {
        title: 'text-4xl lg:text-5xl',
        subtitle: 'text-2xl lg:text-3xl',
        text: 'text-lg lg:text-xl',
      },
      position: 'right-0',
      padding: 'p-6 md:p-10',
    },
    luxuoso: {
      colorScheme: {
        background: 'bg-black',
        title: 'text-gold-500 bg-black bg-opacity-80',
        subtitle: 'text-gold-400 bg-gray-900 bg-opacity-70',
        text: 'text-gold-300 bg-gray-800 bg-opacity-60',
      },
      fontSize: {
        title: 'text-5xl lg:text-6xl',
        subtitle: 'text-3xl lg:text-4xl',
        text: 'text-xl lg:text-2xl',
      },
      position: 'left-0',
      padding: 'p-8 md:p-12',
    },
    monocromatico: {
      colorScheme: {
        background: 'bg-gray-800',
        title: 'text-gray-100 bg-gray-900 bg-opacity-90',
        subtitle: 'text-gray-200 bg-gray-700 bg-opacity-80',
        text: 'text-gray-300 bg-gray-600 bg-opacity-70',
      },
      fontSize: {
        title: 'text-4xl lg:text-5xl',
        subtitle: 'text-2xl lg:text-3xl',
        text: 'text-lg lg:text-xl',
      },
      position: 'right-0',
      padding: 'p-5 md:p-8',
    },
    vintage: {
      colorScheme: {
        background: 'bg-yellow-200',
        title: 'text-brown-900 bg-yellow-800 bg-opacity-90',
        subtitle: 'text-brown-800 bg-yellow-600 bg-opacity-80',
        text: 'text-brown-700 bg-yellow-400 bg-opacity-70',
      },
      fontSize: {
        title: 'text-4xl lg:text-5xl',
        subtitle: 'text-2xl lg:text-3xl',
        text: 'text-lg lg:text-xl',
      },
      position: 'right-0',
      padding: 'p-6 md:p-10',
    },
    minimalistaEscuro: {
      colorScheme: {
        background: 'bg-gray-900',
        title: 'text-white bg-transparent',
        subtitle: 'text-gray-300 bg-transparent',
        text: 'text-gray-400 bg-transparent',
      },
      fontSize: {
        title: 'text-2xl lg:text-3xl',
        subtitle: 'text-lg lg:text-xl',
        text: 'text-sm lg:text-md',
      },
      position: 'right-0',
      padding: 'p-2 md:p-4',
    },
    profissional: {
      colorScheme: {
        background: 'bg-blue-800',
        title: 'text-white bg-blue-900 bg-opacity-90',
        subtitle: 'text-gray-200 bg-blue-700 bg-opacity-80',
        text: 'text-gray-300 bg-blue-600 bg-opacity-70',
      },
      fontSize: {
        title: 'text-4xl lg:text-5xl',
        subtitle: 'text-2xl lg:text-3xl',
        text: 'text-lg lg:text-xl',
      },
      position: 'left-0',
      padding: 'p-5 md:p-8',
    },
    ousado: {
      colorScheme: {
        background: 'bg-red-600',
        title: 'text-yellow-100 bg-red-700 bg-opacity-80',
        subtitle: 'text-yellow-200 bg-red-500 bg-opacity-70',
        text: 'text-yellow-300 bg-red-400 bg-opacity-60',
      },
      fontSize: {
        title: 'text-5xl lg:text-6xl',
        subtitle: 'text-3xl lg:text-4xl',
        text: 'text-xl lg:text-2xl',
      },
      position: 'right-0',
      padding: 'p-6 md:p-10',
    },
    academico: {
      colorScheme: {
        background: 'bg-gray-300',
        title: 'text-black bg-gray-400 bg-opacity-80',
        subtitle: 'text-black bg-gray-500 bg-opacity-70',
        text: 'text-black bg-gray-600 bg-opacity-60',
      },
      fontSize: {
        title: 'text-3xl lg:text-4xl',
        subtitle: 'text-xl lg:text-2xl',
        text: 'text-md lg:text-lg',
      },
      position: 'left-0',
      padding: 'p-5 md:p-8',
    },
    sunset: {
      colorScheme: {
        background: 'bg-red-400',
        title: 'text-orange-100 bg-red-600 bg-opacity-80',
        subtitle: 'text-orange-200 bg-red-500 bg-opacity-70',
        text: 'text-orange-300 bg-red-400 bg-opacity-60',
      },
      fontSize: {
        title: 'text-4xl lg:text-5xl',
        subtitle: 'text-2xl lg:text-3xl',
        text: 'text-lg lg:text-xl',
      },
      position: 'right-0',
      padding: 'p-6 md:p-10',
    },
    florescente: {
      colorScheme: {
        background: 'bg-pink-500',
        title: 'text-yellow-100 bg-pink-700 bg-opacity-80',
        subtitle: 'text-yellow-200 bg-pink-600 bg-opacity-70',
        text: 'text-yellow-300 bg-pink-500 bg-opacity-60',
      },
      fontSize: {
        title: 'text-5xl lg:text-6xl',
        subtitle: 'text-3xl lg:text-4xl',
        text: 'text-xl lg:text-2xl',
      },
      position: 'left-0',
      padding: 'p-7 md:p-10',
    },
  };
  