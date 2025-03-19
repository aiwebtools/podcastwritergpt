
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cyberpunk theme colors
				cyber: {
					'bg-dark': '#0B0B14',
					'bg-darker': '#05050A',
					'neon-blue': '#58E6FF',
					'neon-purple': '#BD00FF',
					'neon-pink': '#FF2976',
					'neon-cyan': '#00F0FF',
					'text-primary': '#FFFFFF',
					'text-secondary': '#B8B8B8',
					'glow-blue': '#1E90FF',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'neon-pulse': {
					'0%, 100%': { 
						opacity: '1',
						filter: 'brightness(1) drop-shadow(0 0 5px hsl(var(--primary)))'
					},
					'50%': { 
						opacity: '0.8',
						filter: 'brightness(1.2) drop-shadow(0 0 10px hsl(var(--primary)))'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px theme("colors.cyber.neon-blue"), 0 0 15px theme("colors.cyber.neon-blue")'
					},
					'50%': { 
						boxShadow: '0 0 20px theme("colors.cyber.neon-blue"), 0 0 30px theme("colors.cyber.neon-blue")'
					}
				},
				'text-shimmer': {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'neon-pulse': 'neon-pulse 3s infinite ease-in-out',
				'float': 'float 6s infinite ease-in-out',
				'glow': 'glow 3s infinite ease-in-out',
				'text-shimmer': 'text-shimmer 2s linear infinite',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'slide-up': 'slide-up 0.7s ease-out forwards',
			},
			backgroundImage: {
				'cyber-grid': 'linear-gradient(rgba(5, 5, 10, 0.8) 1px, transparent 1px), linear-gradient(to right, rgba(5, 5, 10, 0.8) 1px, transparent 1px)',
				'neon-gradient': 'linear-gradient(90deg, #58E6FF, #BD00FF, #00F0FF)',
				'glow-dot': 'radial-gradient(circle, rgba(88, 230, 255, 0.9) 0%, rgba(88, 230, 255, 0.3) 35%, transparent 70%)',
			},
			backdropFilter: {
				'glass': 'blur(16px) saturate(180%)',
			},
			boxShadow: {
				'neon': '0 0 5px theme("colors.cyber.neon-blue"), 0 0 10px theme("colors.cyber.neon-blue")',
				'neon-strong': '0 0 10px theme("colors.cyber.neon-blue"), 0 0 30px theme("colors.cyber.neon-blue")',
				'neon-purple': '0 0 5px theme("colors.cyber.neon-purple"), 0 0 10px theme("colors.cyber.neon-purple")',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
