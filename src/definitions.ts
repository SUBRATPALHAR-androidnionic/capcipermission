declare module '@capacitor/core' {
  interface PluginRegistry {
    Capcipermission: CapcipermissionPlugin;
  }
}

export interface CapcipermissionPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
