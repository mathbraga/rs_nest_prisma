import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Notification } from '@prisma/client';
import { CreateNotificationBody } from './create-notification-body';
import { randomUUID } from 'crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async listAllNotifications(): Promise<Notification[]> {
    const notifications = await this.prisma.notification.findMany();

    return notifications;
  }

  @Post()
  async createNotification(
    @Body() body: CreateNotificationBody,
  ): Promise<Notification> {
    const { recipientId, content, category } = body;

    const notification = await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });

    return notification;
  }
}
