const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const subSchema= new Schema({
    
        "kind": {type:String},
        "etag":{type:String},
        "nextPageToken": {type:String},
        "prevPageToken": {type:String},
        "pageInfo": {
          "totalResults": {type:Number},
          "resultsPerPage": {type:Number}
        },
        "items": [
            {
                "kind": {type:String},
                "etag":{type:String},
                "id": {type:String},
                "snippet": {
                  "publishedAt": {type:String},
                  "channelId": {type:String},
                  "title": {type:String},
                  // "description": {type:String},
                  "thumbnails": {
                    "default": {
                      "url": {type:String},
                      "width": {type:Number},
                      "height": {type:Number}
                    },
                    "medium": {
                      "url": {type:String},
                      "width": {type:Number},
                      "height": {type:Number}
                    },
                    "high": {
                      "url": {type:String},
                      "width": {type:Number},
                      "height": {type:Number}
                    },
                    "standard": {
                      "url": {type:String},
                      "width": {type:Number},
                      "height": {type:Number}
                    },
                    "maxres": {
                      "url": {type:String},
                      "width": {type:Number},
                      "height": {type:Number}
                    }
                  },
                  "channelTitle": {type:String},
                  "videoOwnerChannelTitle": {type:String},
                  "videoOwnerChannelId": {type:String},
                  "playlistId": {type:String},
                  "position": {type:Number},
                  "resourceId": {
                    "kind": {type:String},
                    "videoId": {type:String},
                  }
                },
                "contentDetails": {
                  "videoId": {type:String},
                  "startAt": {type:String},
                  "endAt": {type:String},
                  "note": {type:String},
                  "videoPublishedAt": {type:String}
                }
              }
        ]   
});

const Subject=mongoose.model('Subject',subSchema);

module.exports=Subject;