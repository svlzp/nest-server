export interface IGitHubProfile {
	id: number
	login: string
	name: string | null
	email: string | null
	avatar_url: string
	html_url: string
	bio: string | null
	company: string | null
	location: string | null
	blog: string | null
	twitter_username: string | null
	public_repos: number
	public_gists: number
	followers: number
	following: number
	created_at: string
	updated_at: string
}
