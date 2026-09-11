import { StatusBar } from "expo-status-bar";
import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-1 bg-white"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <StatusBar style="dark" />

      <View className="flex-1 px-6">
        <View className="mt-8">
          <Text
            style={{
              color: "#111111",
              fontSize: 30,
              fontWeight: "800",
            }}
          >
            CRÉNO
          </Text>
        </View>

        <View className="flex-1 justify-center">
          <Text
            style={{
              color: "#111111",
              fontSize: 44,
              lineHeight: 50,
              fontWeight: "800",
            }}
          >
            Ton prochain cours,
          </Text>

          <Text
            style={{
              color: "#111111",
              fontSize: 44,
              lineHeight: 50,
              fontWeight: "800",
            }}
          >
            au dernier moment.
          </Text>

          <Text
            style={{
              marginTop: 24,
              color: "#737373",
              fontSize: 18,
              lineHeight: 28,
            }}
          >
            Découvre les places disponibles dans les studios autour de toi et
            réserve ton cours en quelques secondes.
          </Text>

          <TouchableOpacity
            className="mt-10 items-center rounded-2xl bg-creno-lime px-6 py-5"
            activeOpacity={0.8}
          >
            <Text
              style={{
                color: "#111111",
                fontSize: 16,
                fontWeight: "700",
              }}
            >
              Découvrir les cours
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="mt-3 items-center rounded-2xl border border-neutral-200 px-6 py-5"
            activeOpacity={0.8}
          >
            <Text
              style={{
                color: "#111111",
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              Se connecter
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            marginBottom: 24,
            color: "#A3A3A3",
            fontSize: 14,
            textAlign: "center",
          }}
        >
          Pas d'abonnement. Réserve quand tu veux.
        </Text>
      </View>
    </View>
  );
}