package pl.starchasers.up.service

import org.springframework.stereotype.Service
import pl.starchasers.up.data.model.ConfigurationEntry
import pl.starchasers.up.data.model.ConfigurationKey
import pl.starchasers.up.data.model.User
import pl.starchasers.up.data.value.FileSize
import pl.starchasers.up.data.value.Milliseconds
import pl.starchasers.up.repository.ConfigurationRepository
import javax.annotation.PostConstruct

interface ConfigurationService {
    fun applyDefaultConfiguration(user: User)

    fun setConfigurationOption(key: ConfigurationKey, value: String)

    fun getConfigurationOption(key: ConfigurationKey): String

    fun getGlobalConfiguration(): Map<ConfigurationKey, String>
}

@Service
class ConfigurationServiceImpl(
        private val configurationRepository: ConfigurationRepository
) : ConfigurationService {

    override fun applyDefaultConfiguration(user: User) {
        user.apply {
            maxTemporaryFileSize = FileSize(getConfigurationOption(
                    ConfigurationKey.DEFAULT_USER_MAX_TEMPORARY_FILE_SIZE).toLong())
            maxPermanentFileSize = FileSize(getConfigurationOption(
                    ConfigurationKey.DEFAULT_USER_MAX_PERMANENT_FILE_SIZE).toLong())
            defaultFileLifetime = Milliseconds(getConfigurationOption(
                    ConfigurationKey.DEFAULT_USER_DEFAULT_FILE_LIFETIME).toLong())
            maxFileLifetime = Milliseconds(getConfigurationOption(
                    ConfigurationKey.DEFAULT_USER_MAX_FILE_LIFETIME).toLong())
        }
    }

    override fun setConfigurationOption(key: ConfigurationKey, value: String) {
        val entry = configurationRepository.findFirstByKey(key) ?: ConfigurationEntry(0, key, value)
        entry.value = value
        configurationRepository.save(entry)
    }

    override fun getConfigurationOption(key: ConfigurationKey): String {
        return configurationRepository.findFirstByKey(key)?.value ?: key.defaultValue
    }

    override fun getGlobalConfiguration(): Map<ConfigurationKey, String> =
            mapOf(*ConfigurationKey.values().map { Pair(it, configurationRepository.findFirstByKey(it).toString()) }.toTypedArray())


    @PostConstruct
    private fun initialize() {
        ConfigurationKey.values().forEach { key ->
            val entry = configurationRepository.findFirstByKey(key)

            if (entry == null) {
                val defaultEntry = ConfigurationEntry(0, key, key.defaultValue)
                configurationRepository.save(defaultEntry)
            }
        }
    }

}