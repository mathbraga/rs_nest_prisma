# Notifications Redirector

This project is an api for a notification redirection service that receives data in the form of notifications and forwards it to a designated destination.

It also acts as a Kafka consumer to receive messages from multiple other services asynchronously.

This project was built during the IgniteLab event hosted by [RocketSeat](https://www.rocketseat.com.br/).

## Installation

#### Download repository to your local environment
```
git clone https://github.com/mathbraga/rs_nest_prisma.git
```

#### Install dependencies
```
npm install
```

#### Define your environment variables
```
cp .env.example .env
```

#### Run in development
```
npm run start:dev
```

You can also run an intuitive database UI with Prisma
```
npx prisma studio
```

## Kafka

To send messages to this service using Kafka, you need a Kafka producer to create the messages.

I recommend following this [guide](https://kafka.js.org/docs/producing#producing-messages) from KafkaJS to create a simple producer, but you can use whatever is your preferred approach. You can also use something like [Upstash](https://upstash.com/).

## API Endpoints
#### Create a notification
##### ```POST /notifications```

Request body
```
{
  "category": "test",
  "content": "New notification test.",
  "recipientId": "some-unique-id"
}
```

Response: newly created notification
```
{
  "id": "some-unique-id",
  "category": "test",
  "content":  "New notification test.",
  "recipientId": "some-unique-id"
}
```

#### Count how many notifications for a recipient
##### ```GET /notifications/count/from/:recipientId```

Request body
```
None
```

Response
```
{
  "count": number
}
```

#### List all notifications for a recipient
##### ```GET /notifications/from/:recipientId```

Request body
```
None
```

Response
```
{
  "notifications": [
    {
      "id": "some-unique-id",
      "category": "test",
      "content":  "New notification test.",
      "recipientId": "some-unique-id"
    },
    ...
  ]
}
```

#### Cancel a notification (set 'canceledAt' field)
##### ```PATCH /notifications/:notificationID/cancel```

Request body
```
None
```

Response
```
None
```

#### Read a notification (set 'readAt' field)
##### ```PATCH /notifications/:notificationID/read```

Request body
```
None
```

Response
```
None
```

#### Unread a notification (set 'readAt' = null)
##### ```PATCH /notifications/:notificationID/unread```

Request body
```
None
```

Response
```
None
```
