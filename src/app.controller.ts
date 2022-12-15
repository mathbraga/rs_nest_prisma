import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Notification, Prisma } from '@prisma/client';
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
  async createNotification(): Promise<Notification> {
    const notification = await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'Your product has arrived at transportation.',
        category: 'Logistics',
        recipientId: randomUUID(),
      },
    });

    return notification;
  }
}
