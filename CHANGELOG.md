# Changelog

Todas las versiones notables de este proyecto se documentan en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es/1.1.0/) y este
proyecto se adhiere a [Semantic Versioning](https://semver.org/lang/es/).

---

## [1.6.1] — Migración a pnpm + Next.js 16 + React 19

### Resumen

Fase de **migración y saneamiento** del proyecto: se cambió el gestor de paquetes de
`npm` a `pnpm`, se actualizaron las librerías principales, se corrigió la configuración
de ESLint y se eliminó la sección de contacto (que se rehará posteriormente de forma
reestructurada).

### Migraciones y actualizaciones

#### Gestor de paquetes: `npm` → `pnpm`

- Se generó `pnpm-lock.yaml` a partir del `package-lock.json` existente con `pnpm import`.
- Se eliminó `package-lock.json`.
- Se utilizó el archivo de configuración `pnpm-workspace.yaml` para overrides de seguridad
  y permisos de build (`allowBuilds`).
- **Nota:** en pnpm 11 los ajustes ya **no** se leen del campo `pnpm` del `package.json`;
  se declaran en `pnpm-workspace.yaml` (p. ej. `overrides`).

#### Librerías principales

- **next**: `15.3.1` → `16.3.3` (Turbopack por defecto).
- **react / react-dom**: `19.1.0` → `19.2.x`.
- **typescript**: `5.8.3` → `6.0.3`.
- **sass**: `1.87.0` → `1.103.1`.
- **eslint**: `9.25.1` → `9.39.5`.
- **eslint-config-next**: `15.3.1` → `16.3.3`.
- Los tipos (`@types/*`) se movieron a `devDependencies`.

> **Notas de compatibilidad (importantes):**
>
> - `typescript` se fijó en **6.0.3** porque `typescript-eslint` aún **no soporta TS 7**.
> - `eslint` se fijó en **9.39.5** porque `eslint-plugin-react` **no soporta ESLint 10**.
> - Por lo tanto, no se deben "actualizar" `typescript` a 7.x ni `eslint` a 10.x por ahora.

#### Configuración de ESLint (flat config)

- Se eliminó `.eslintrc.json` (formato legacy que `next lint` ya no usa).
- Se creó `eslint.config.mjs` con la configuración flat de Next 16:
  `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`.
- El script `lint` pasó de `next lint` (eliminado en Next 16) a `eslint .`.

#### `next.config.ts`

- Se migró de `next.config.js` a `next.config.ts`.
- Se eliminó el hack de webpack para PDF y `swcMinify` (obsoletos).

### Cambios funcionales / "breaking"

- **Eliminada la sección Contact** (`/Contact`): página, componente, hojas SCSS y
  librería `@emailjs/browser` se retiraron. **Se rehará posteriormente de forma
  reestructurada** (vuelve a planificar rutas: `/AboutMe`, `/Developments`, `/Extras`
  son las actuales).
- El enlace "Hagamos algo grandioso" de Extras apunta ahora a **LinkedIn** (antes a `/Contact`).
- El CV se movió de `documents/` a `public/documents/` y se referencia como URL estática
  `/documents/cv.pdf` (ya no se importa como módulo). Se eliminó el `declare module "*.pdf"`
  de `types.d.ts` (innecesario).
- Scroll-to-top global: nuevo componente `src/components/ScrollToTop.tsx` con
  `usePathname()` + `useEffect`, montado en `Layout`. Reemplaza el hack de
  `window.onbeforeunload` que existía en `Developments/page.tsx`.

### Seguridad (overrides)

`pnpm audit` reportaba 10 vulnerabilidades (7 high / 2 moderate / 1 low) en dependencias
**dev** de lint (`minimatch@3.1.2`, `brace-expansion`, `picomatch`). Se resolvieron
forzando versiones parcheadas con `overrides` en `pnpm-workspace.yaml`:

```yaml
overrides:
  minimatch: ^3.1.4
  brace-expansion: ^1.1.18
  picomatch: ^2.3.2
```

Resultado: `pnpm audit` → **No known vulnerabilities found**.

### Archivos relevantes

- Creados: `eslint.config.mjs`, `next.config.ts`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`,
  `src/components/ScrollToTop.tsx`, `src/types/styles.d.ts`.
- Eliminados: `.eslintrc.json`, `next.config.js`, `package-lock.json`, `types.d.ts`,
  archivos de la sección Contact, `documents/cv.pdf` (movido a `public/`).
- Modificados: `package.json`, `tsconfig.json`, `next.config.ts`, `src/database/info.ts`,
  `src/components/Layout.tsx`, `src/app/*`, etc.

### Notas a tener en cuenta a futuro

- No dejes de avanzar.

---

## [0.1.0] — Versión inicial

Esta es la version de creacion y actualizacion de informacion que inicio con Next.js 13 ya obsoleta.
