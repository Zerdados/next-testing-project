export type mapKey = {
    district: string;
    year: string;
  }

  export interface PackageRes {
    help: string;
    success: boolean;
    result: Result;
  }
  export interface Result {
    license_title: string;
    maintainer: string;
    relationships_as_object?: (null)[] | null;
    private: boolean;
    maintainer_email: string;
    num_tags: number;
    id: string;
    metadata_created: string;
    metadata_modified: string;
    author: string;
    author_email: string;
    state: string;
    version: string;
    creator_user_id: string;
    type: string;
    resources?: (ResourcesEntity)[] | null;
    num_resources: number;
    tags?: (TagsEntity)[] | null;
    groups?: (GroupsEntity)[] | null;
    license_id: string;
    relationships_as_subject?: (null)[] | null;
    organization: Organization;
    name: string;
    isopen: boolean;
    url: string;
    notes: string;
    owner_org: string;
    extras?: (null)[] | null;
    license_url: string;
    title: string;
  }
  export interface ResourcesEntity {
    mimetype: string;
    cache_url?: null;
    hash: string;
    description: string;
    metadata_modified: string;
    created: string;
    url: string;
    datastore_active: boolean;
    format: string;
    package_id: string;
    name: string;
    cache_last_updated?: null;
    state: string;
    mimetype_inner?: null;
    last_modified?: string | null;
    position: number;
    datastore_contains_all_records_of_source_file: boolean;
    url_type?: string | null;
    id: string;
    resource_type?: null;
    size?: number | null;
  }
  export interface TagsEntity {
    vocabulary_id?: null;
    state: string;
    display_name: string;
    id: string;
    name: string;
  }
  export interface GroupsEntity {
    display_name: string;
    description: string;
    image_display_url: string;
    title: string;
    id: string;
    name: string;
  }
  export interface Organization {
    description: string;
    created: string;
    title: string;
    name: string;
    is_organization: boolean;
    state: string;
    image_url: string;
    type: string;
    id: string;
    approval_status: string;
  }
  