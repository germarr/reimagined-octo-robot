# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```

WITH tablef AS (
 SELECT TO_DATE(full_date_trending,'YYYY-MM-DD') as date_min, category_title ,COUNT(*) as videos_trending from public.summaryvideos 
 WHERE TO_DATE(full_date_trending,'YYYY-MM-DD') = '2022-04-20' 
 GROUP BY date_min, category_title
 ORDER BY videos_trending desc
 limit 1), tablef2 as (
	 SELECT 
			TO_DATE(full_date_trending,'YYYY-MM-DD') as date_min,
            PERCENTILE_DISC(0.5) WITHIN GROUP(ORDER BY "viewCount") as median_views,
            PERCENTILE_DISC(0.5) WITHIN GROUP(ORDER BY "likeCount") as median_likes,
            PERCENTILE_DISC(0.5) WITHIN GROUP(ORDER BY "commentCount") as median_comments,
			(PERCENTILE_DISC(0.5) WITHIN GROUP(ORDER BY duration)/60) as median_duration
        FROM public.summaryvideos as tb1
		WHERE TO_DATE(full_date_trending,'YYY-MM-DD') = '2022-04-20'
		GROUP BY date_min
 )
 
select tablef2.date_min, tablef2.median_views, tablef2.median_likes, tablef2.median_comments, 
ROUND(tablef2.median_duration::decimal, 2), tablef.category_title, tablef.videos_trending
from tablef2
left join tablef ON tablef2.date_min = tablef.date_min;
