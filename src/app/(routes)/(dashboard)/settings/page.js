import UploadAvatar from "@/components/UploadAvatar";

export default function DashboardSettingsPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Ajustes de Cuenta</h1>
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl mb-4">Foto de Perfil</h2>
        {/* <UploadPhotoForm /> */}
        <UploadAvatar />
      </section>
    </div>
  );
}
