import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

interface Site {
  id: string
  name: string
  url: string
  screenshot_url: string
}

interface SitesDashboardProps {
  token: string
}

const fetchSites = async (token: string): Promise<Site[]> => {
  const response = await axios.get('https://api.netlify.com/api/v1/sites', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

const SitesDashboard: React.FC<SitesDashboardProps> = ({ token }) => {
  const { data: sites, isLoading, error } = useQuery<Site[], Error>(
    ['sites', token],
    () => fetchSites(token)
  )

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="sites-dashboard">
      {sites?.map((site) => (
        <div key={site.id} className="site-card">
          <h2>{site.name}</h2>
          <a href={site.url} target="_blank" rel="noopener noreferrer">
            {site.url}
          </a>
          <img src={site.screenshot_url} alt={`Screenshot of ${site.name}`} />
        </div>
      ))}
    </div>
  )
}

export default SitesDashboard