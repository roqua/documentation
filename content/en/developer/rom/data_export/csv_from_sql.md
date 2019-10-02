---
title: Generating a csv export from the sql export
---

* TOC
{:toc}

Creating a csv export from the sql export can give you more freedom or stability in it's output.

As a starting point we describe here how to generate the csv_export as can be downloaded on [data_export/download](../responses). We start with an export_version, a description of each column in the csv, then for each response and each column we fetch the required data.

For the details it's best to look at the code of our reference implementation, start at [write_response, via get_value](https://gitlab.roqua.nl/roqua/roqua-csv_export/blob/master/lib/roqua/csv_export/csv_export_questionnaire_version.rb) follow to the [response methods](https://gitlab.roqua.nl/roqua/roqua-csv_export/blob/master/lib/roqua/csv_export/models/response.rb) and the [meta data methods](https://gitlab.roqua.nl/roqua/roqua-csv_export/blob/master/lib/roqua/csv_export/meta_data.rb).

### Step 1: Download the export versions definitions.

    GET /api/v1/data_exports/download_export_versions

This is a zipfile with all export_versions. Generally you'll only want to use the latest version.

Each export_version has per questionnaire and per columns a hash with: 

* key: the attribute to fetch (source_type determines where)
* sub_key: only for scores, the sub_key of the score to get.
* header: the name of the header in the csv.
* source_type: the type of data, one of:
  * variable: the answer to a question. usually v_1, v_2a, ...
  * score: calculated score based on the answers in the response.
  * flag: boolean, influences visibility of questions
  * textvar: string, inserted in the text of the questionnaire
  * metadata: other info, [see methods](https://gitlab.roqua.nl/roqua/roqua-csv_export/blob/master/lib/roqua/csv_export/meta_data.rb)

```
{
  "fields": {
    "oq45": [
      {
        "key": "v_1",
        "header": "oq45_1",
        "source_type": "variable"
      },
      ...
    ],
    ...
  }
}
```

### Step 2: download je de sql_export.

See [SQL Export page](../sql_export)

### Step 3: Use the gem to generate the code

```
gem install roqua-csv_export
irb
> require 'roqua-csv_export'
> Roqua::CsvExport.generate sqlite_path: Pathname.new('sql_export.db'),
                          export_versions_path: Pathname.new('export_versions'),
                          output_path: Pathname.new('csv_exports'),
                          organization_key: 'demo',
                          anonymous_data_in_exports: false # the default.
```

export_versions_path is a directory with one or more json files from the download_export_versions action.

If your going to use ruby and want to experiment, the source is [on our gitlab](https://gitlab.roqua.nl/roqua/roqua-csv_export). See the part on Developing. While developing you can always run `bundle exec irb` and follow the example from the gem.
