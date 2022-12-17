import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Notification as NotificationType } from '@prisma/client';
import { CreateNotificationBody } from './create-notification-body';
import { randomUUID } from 'crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async listAllNotifications(): Promise<NotificationType[]> {
    const notifications = await this.prisma.notification.findMany();

    return notifications;
  }

  @Post()
  async createNotification(
    @Body() body: CreateNotificationBody,
  ): Promise<NotificationType> {
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
