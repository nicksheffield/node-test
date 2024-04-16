import { serve } from '@hono/node-server'
import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => c.text('Hono!'))
app.get('/hello', (c) => c.json({ hello: 'world' }))

serve({
	port: 3000,
	fetch: app.fetch,
})
