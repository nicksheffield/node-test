import { serve } from '@hono/node-server'
import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => c.text('Hono!'))

serve({
	port: 3000,
	fetch: app.fetch,
})
