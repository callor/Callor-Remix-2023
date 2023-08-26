# Remix 2023 Project

@since 2023-08-26

## project 생성

```bash
npx create-remix@latest [project-name]
```

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over relevant code/assets from your current app to the new project that's pre-configured for your target server.

Most importantly, this means everything in the `app/` directory, but if you've further customized your current application outside of there it may also include:

- Any assets you've added/updated in `public/`
- Any updated versions of root files such as `.eslintrc.js`, etc.

## remix 변경

- 폴더기반 routing 안됨
- `remix.config.js`에서 `routes`를 설정해야함
- `routes`는 `path`와 `loader`로 구성됨
- `loader`는 `loader: () => import('./routes/About')`와 같이 `import`로 설정해야함

## remix server 실행

```bash
npm run dev
```

## remix build

```bash
npm run build
```
