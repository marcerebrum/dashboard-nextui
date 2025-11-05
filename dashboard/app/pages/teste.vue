<script setup lang="ts">
// Interfaces TypeScript
interface Stat {
  title: string
  value: string
  variation: string
  color: 'success' | 'warning' | 'error' | 'primary'
  icon: string
}

interface Activity {
  id: number
  action: string
  user: string
  time: string
  icon: string
  color: 'primary' | 'success' | 'warning'
}

interface Service {
  name: string
  description: string
  status: string
  requests: number
  color: 'success' | 'warning'
}

interface Request {
  id: number
  title: string
  client: string
  date: string
  status: string
  priority: string
  value: string
}

// Dados fictícios baseados na referência do WhatsApp
const stats = ref<Stat[]>([
  {
    title: 'Solicitações',
    value: '24',
    variation: '+12%',
    color: 'success',
    icon: 'i-lucide-file-text'
  },
  {
    title: 'Concluídos',
    value: '18',
    variation: '+5%',
    color: 'success',
    icon: 'i-lucide-check-circle'
  },
  {
    title: 'Pendentes',
    value: '6',
    variation: '-2%',
    color: 'warning',
    icon: 'i-lucide-clock'
  },
  {
    title: 'Cancelados',
    value: '2',
    variation: '0%',
    color: 'error',
    icon: 'i-lucide-x-circle'
  }
])

const activities = ref<Activity[]>([
  {
    id: 1,
    action: 'Nova solicitação de orçamento',
    user: 'Maria Silva',
    time: '2 min atrás',
    icon: 'i-lucide-plus-circle',
    color: 'primary'
  },
  {
    id: 2,
    action: 'Solicitação concluída',
    user: 'João Santos',
    time: '15 min atrás',
    icon: 'i-lucide-check',
    color: 'success'
  },
  {
    id: 3,
    action: 'Orçamento aprovado',
    user: 'Ana Costa',
    time: '1h atrás',
    icon: 'i-lucide-thumbs-up',
    color: 'success'
  },
  {
    id: 4,
    action: 'Solicitação reagendada',
    user: 'Carlos Oliveira',
    time: '2h atrás',
    icon: 'i-lucide-calendar',
    color: 'warning'
  },
  {
    id: 5,
    action: 'Contato realizado',
    user: 'Fernanda Lima',
    time: '3h atrás',
    icon: 'i-lucide-phone',
    color: 'primary'
  }
])

const services = ref<Service[]>([
  {
    name: 'Consultoria Técnica',
    description: 'Análise e recomendações técnicas para seu projeto',
    status: 'Ativo',
    requests: 12,
    color: 'success'
  },
  {
    name: 'Desenvolvimento Web',
    description: 'Criação de sites e aplicações web responsivas',
    status: 'Ativo',
    requests: 8,
    color: 'success'
  },
  {
    name: 'Marketing Digital',
    description: 'Estratégias de marketing online e redes sociais',
    status: 'Pausado',
    requests: 3,
    color: 'warning'
  },
  {
    name: 'Suporte Técnico',
    description: 'Manutenção e suporte para sistemas existentes',
    status: 'Ativo',
    requests: 15,
    color: 'success'
  }
])

const recentRequests = ref<Request[]>([
  {
    id: 1,
    title: 'Website Corporativo',
    client: 'Tech Solutions LTDA',
    date: '2024-11-05',
    status: 'Em progresso',
    priority: 'Alta',
    value: 'R$ 15.000'
  },
  {
    id: 2,
    title: 'App Mobile',
    client: 'Startup Innovadora',
    date: '2024-11-04',
    status: 'Aguardando aprovação',
    priority: 'Média',
    value: 'R$ 25.000'
  },
  {
    id: 3,
    title: 'Sistema ERP',
    client: 'Indústria ABC',
    date: '2024-11-03',
    status: 'Concluído',
    priority: 'Alta',
    value: 'R$ 45.000'
  },
  {
    id: 4,
    title: 'E-commerce',
    client: 'Loja Online XYZ',
    date: '2024-11-02',
    status: 'Em revisão',
    priority: 'Média',
    value: 'R$ 18.000'
  }
])
</script>

<template>
  <UDashboardPanel id="teste">
    <template #header>
      <UDashboardNavbar
        title="O que foi solicitado"
        :ui="{ right: 'gap-3' }"
      >
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>

        <template #trailing>
          <UButton
            icon="i-lucide-filter"
            variant="outline"
            size="sm"
            class="rounded-lg"
          />
          <UButton
            icon="i-lucide-download"
            variant="outline"
            size="sm"
            class="rounded-lg"
          />
        </template>
      </UDashboardNavbar>
    </template>

    <template #body>
      <div class="p-6 space-y-6 bg-gray-50 min-h-screen">
        <!-- Cards de Estatísticas -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <UCard
            v-for="(stat, index) in stats"
            :key="index"
            class="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-gray-600 mb-1">
                  {{ stat.title }}
                </p>
                <p class="text-2xl font-bold text-gray-900">
                  {{ stat.value }}
                </p>
                <div class="flex items-center mt-2">
                  <UBadge
                    :color="stat.color"
                    variant="subtle"
                    size="xs"
                    class="text-xs"
                  >
                    {{ stat.variation }}
                  </UBadge>
                </div>
              </div>
              <div class="p-3 bg-gray-100 rounded-full">
                <UIcon :name="stat.icon" class="w-6 h-6 text-gray-600" />
              </div>
            </div>
          </UCard>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Atividades Recentes -->
          <UCard class="bg-white border-0 shadow-sm">
            <template #header>
              <div class="flex items-center gap-2">
                <UIcon name="i-lucide-activity" class="w-5 h-5 text-gray-600" />
                <h3 class="text-lg font-semibold text-gray-900">
                  Atividades Recentes
                </h3>
              </div>
            </template>

            <div class="space-y-3">
              <div
                v-for="activity in activities"
                :key="activity.id"
                class="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div class="p-2 bg-gray-100 rounded-full flex-shrink-0">
                  <UIcon :name="activity.icon" class="w-4 h-4 text-gray-600" />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate">
                    {{ activity.action }}
                  </p>
                  <p class="text-xs text-gray-500">
                    {{ activity.user }}
                  </p>
                </div>
                <span class="text-xs text-gray-400 flex-shrink-0">
                  {{ activity.time }}
                </span>
              </div>
            </div>
          </UCard>

          <!-- Serviços Ativos -->
          <UCard class="bg-white border-0 shadow-sm">
            <template #header>
              <div class="flex items-center gap-2">
                <UIcon name="i-lucide-briefcase" class="w-5 h-5 text-gray-600" />
                <h3 class="text-lg font-semibold text-gray-900">
                  Serviços Ativos
                </h3>
              </div>
            </template>

            <div class="space-y-3">
              <div
                v-for="(service, index) in services"
                :key="index"
                class="border border-gray-200 rounded-lg p-3 hover:border-gray-300 transition-colors"
              >
                <div class="flex items-start justify-between mb-2">
                  <h4 class="font-medium text-gray-900">
                    {{ service.name }}
                  </h4>
                  <UBadge
                    :color="service.color"
                    variant="subtle"
                    size="xs"
                  >
                    {{ service.status }}
                  </UBadge>
                </div>
                <p class="text-xs text-gray-600 mb-2">
                  {{ service.description }}
                </p>
                <p class="text-xs text-gray-500">
                  {{ service.requests }} solicitações ativas
                </p>
              </div>
            </div>
          </UCard>
        </div>

        <!-- Solicitações Recentes -->
        <UCard class="bg-white border-0 shadow-sm">
          <template #header>
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-file-text" class="w-5 h-5 text-gray-600" />
              <h3 class="text-lg font-semibold text-gray-900">
                Solicitações Recentes
              </h3>
            </div>
          </template>

          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-gray-200">
                  <th class="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Projeto
                  </th>
                  <th class="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cliente
                  </th>
                  <th class="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Data
                  </th>
                  <th class="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th class="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Prioridade
                  </th>
                  <th class="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Valor
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr
                  v-for="request in recentRequests"
                  :key="request.id"
                  class="hover:bg-gray-50"
                >
                  <td class="py-3 px-4">
                    <div class="text-sm font-medium text-gray-900">
                      {{ request.title }}
                    </div>
                  </td>
                  <td class="py-3 px-4 text-sm text-gray-600">
                    {{ request.client }}
                  </td>
                  <td class="py-3 px-4 text-sm text-gray-600">
                    {{ request.date }}
                  </td>
                  <td class="py-3 px-4">
                    <UBadge
                      :color="request.status === 'Concluído' ? 'success'
                        : request.status === 'Em progresso' ? 'primary' : 'warning'"
                      variant="subtle"
                      size="xs"
                    >
                      {{ request.status }}
                    </UBadge>
                  </td>
                  <td class="py-3 px-4">
                    <UBadge
                      :color="request.priority === 'Alta' ? 'error' : 'neutral'"
                      variant="subtle"
                      size="xs"
                    >
                      {{ request.priority }}
                    </UBadge>
                  </td>
                  <td class="py-3 px-4 text-sm font-medium text-gray-900">
                    {{ request.value }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </UCard>

        <!-- Footer com informações -->
        <div class="text-center py-6">
          <p class="text-sm text-gray-500">
            Última atualização: {{ new Date().toLocaleString('pt-BR') }}
          </p>
          <p class="text-xs text-gray-400 mt-1">
            Sistema de Gestão de Solicitações - Dashboard de Controle
          </p>
        </div>
      </div>
    </template>
  </UDashboardPanel>
</template>
