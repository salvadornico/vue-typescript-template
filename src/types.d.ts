import { MetaInfo } from "vue-meta"

declare module "vue/types/vue" {
	interface Vue {
		metaInfo?: MetaInfo | (() => MetaInfo)
	}
}
