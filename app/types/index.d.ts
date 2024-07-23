import type { ParsedContent } from '@nuxt/content'
import type { Avatar, Badge, Link } from '#ui/types'
import type { OgImageOptions } from "nuxt-og-image"

export interface BlogPost extends ParsedContent {
  title: string
  description: string
  date: string
  image?: HTMLImageElement
  badge?: Badge
  authors?: ({
    name: string
    description?: string
    avatar?: Avatar
  } & Link)[]
}

export interface CustomOgImageOptions extends OgImageOptions<'NuxtSeo'>{
  title?: string;
}
